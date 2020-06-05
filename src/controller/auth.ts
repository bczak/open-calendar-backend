import * as express from 'express'
import passport from "passport";

class AuthController {
  public static config(app: express.Application) {
    app.route('/auth/logout').get(async (req, res) => {
      await req.logout();
      return res.redirect('/auth/mail/login')
    })
    app.route('/auth/google/login').get(passport.authenticate('google', { scope: ['email', 'profile'] }))
    app.route('/auth/google/callback').get(passport.authenticate('google', { failureRedirect: '/auth/mail/login' }), (req, res) => {
      // @ts-ignore
      res.redirect('/app')
    })
    app.route('/auth/mail/login').post(passport.authenticate('local', { failureMessage: true }), (req, res) => {
      return res.send({ user: req.user }).status(201);
    })

    app.use('/auth/mail/login', express.static('src/static/login'))

  }
}

export default AuthController;