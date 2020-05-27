import * as express from 'express'
import passport from "passport";

class AuthController {
	public static config(app: express.Application) {
		app.route('/auth/logout').get(async (req, res) => {
			await req.logout();
			return res.redirect('/api/user')
		})
		app.route('/auth/google/login').get(passport.authenticate('google', {scope: ['email', 'profile']}))
		app.route('/auth/google/callback').get(passport.authenticate('google', {failureRedirect: '/login'}), (req, res) => {
			res.redirect('/api/user')
		})
		app.route('/auth/mail/login').post(passport.authenticate('local', {failureRedirect: '/auth/mail/login'}), (req, res) => {
			res.redirect('/api/user')
		})
		
		app.route('/auth/mail/login').get((req, res) => {
			res.sendFile(__dirname.substr(0, __dirname.length - 10) + '/static/login.html')
		})
		
	}
}

export default AuthController;