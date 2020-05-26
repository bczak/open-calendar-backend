import * as express from 'express'
import * as passport from 'passport'
import conf from "../../conf";
import UserModel from "../model/user";
import {Strategy} from 'passport-google-oauth20'

class AuthController {
	
	public static googleAuth() {
		passport.serializeUser(function (user, done) {
			done(null, user);
		});
		
		passport.deserializeUser(function (user, done) {
			done(null, user);
		});
		passport.use(new Strategy({
				clientID: conf.CLIENT_ID,
				clientSecret: conf.CLIENT_SECRET,
				callbackURL: conf.DOMAIN + '/auth/google/callback'
			},
			async (access, refresh, profile, cb) => {
				let user: any = UserModel.find({google_id: profile.id})
				if (user) {
					user = {
						mail: profile.emails[0].value,
						google_mail: profile.emails[0].value,
						google_id: Number(profile.id),
						first_name: profile.name.givenName,
						last_name: profile.name.familyName,
					}
					await UserModel.create(user)
					return cb(null, user)
					
				}
			}))
	}
	
	public static routes(app: express.Application) {
		app.route('/auth/google/login')
			.get(passport.authenticate('google', {scope: ['profile', 'email']}));
		
		app.route('/auth/google/logout').get(async (req, res) => {
			// @ts-ignore
			req.logout();
			res.redirect('/')
		});
		
		app.route('/auth/google/callback').get(passport.authenticate('google', {failureRedirect: '/auth/google/login'}),
			async function (req, res) {
				// @ts-ignore
				return res.redirect('/api/user');
			});
	}
}

export default AuthController