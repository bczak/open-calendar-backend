import * as Google from "passport-google-oauth20";
import { CLIENT_ID, CLIENT_SECRET, DOMAIN } from "./conf";
import User from "./model/user";
import * as Local from "passport-local";
import { getRandomName } from "./utils";
import validator from "validator";
import * as argon2 from "argon2";


export const GoogleStrategy = new Google.Strategy(
  {
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: DOMAIN + '/auth/google/callback'
  },
  async (accessToken: String, refreshToken: String, profile: Google.Profile, cb: any) => {
    let user: any = await User.findOne({ google_mail: profile._json.email })
    if (user == null) {
      user = {
        google_mail: profile._json.email,
        first_name: profile.name?.givenName,
        last_name: profile.name?.familyName,
      }
      await User.create(user)
    }

    cb(null, {
      _id: user._id,
      google_mail: profile._json.email,
      first_name: profile.name?.givenName,
      last_name: profile.name?.familyName
    })
  }
)

export const LocalStrategy = new Local.Strategy({
  passReqToCallback: true,
  session: false
},
  async (req, username, password, done) => {
    if (!validator.isEmail(username)) {
      return done(null, false, { message: 'Email is wrong format' })
    }
    let user: any = await User.findOne({ mail: username, google_mail: { $ne: username } })
    if (user && !(await argon2.verify(user.password, password))) {
      return done(null, false, { message: 'Password is incorrect' })
    }
    console.log(user);

    if (user == null) {
      let name: Array<String> = getRandomName().split(' ');
      user = new User({
        first_name: name[0],
        last_name: name[1],
        mail: username,
        password: await argon2.hash(password)
      })
      await user.save();
    }
    console.log(user._id);

    return done(null, {
      _id: user._id,
      first_name: user.first_name,
      last_name: user.last_name,
      mail: user.mail,
    });

  }
)