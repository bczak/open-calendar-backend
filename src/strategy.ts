import * as Google from "passport-google-oauth20";
import {CLIENT_ID, CLIENT_SECRET, DOMAIN} from "./conf";
import {User} from "./model/user";
import * as Local from "passport-local";
import {getRandomName} from "./utils";
import validator from "validator";
import * as argon2 from "argon2";


export const GoogleStrategy = new Google.Strategy(
	{
		clientID: CLIENT_ID,
		clientSecret: CLIENT_SECRET,
		callbackURL: DOMAIN + '/auth/google/callback'
	},
	async (accessToken: String, refreshToken: String, profile: Google.Profile, cb: any) => {
		let user: any = await User.findOne({google_id: profile.id})
		if (user == null) {
			user = {
				google_id: profile._json.sub,
				google_mail: profile._json.email,
				first_name: profile.name?.givenName,
				last_name: profile.name?.familyName,
				mail: profile._json.email
			}
			await User.create(user)
		}
		
		cb(null, {
			google_id: profile._json.sub,
			google_mail: profile._json.email,
			first_name: profile.name?.givenName,
			last_name: profile.name?.familyName,
			mail: profile._json.email
		})
	}
)

export const LocalStrategy = new Local.Strategy({
		session: false
	},
	async (username, password, done) => {
		console.log(username, password);
		if (!validator.isEmail(username)) {
			return done(null, false, {message: 'Email is wrong format'})
		}
		let user: any = await User.findOne({mail: username, google_mail: {$ne: username}})
		if (user && !(await argon2.verify(user.password, password))) {
			return done(null, false, {message: 'Password is incorrect'})
		}
		if (user == null) {
			let name: Array<String> = getRandomName().split(' ');
			user = {
				first_name: name[0],
				last_name: name[1],
				mail: username,
				password: await argon2.hash(password)
				
			}
			await User.create(user);
		}
		
		
		return done(null, {
			first_name: user.first_name,
			last_name: user.last_name,
			mail: username
		});
	}
)