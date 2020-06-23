import * as express from 'express'
import UserService from "../service/user";
import User from '../model/user';
import { runInNewContext } from 'vm';

class UserController {
  public static config(app: express.Application) {
    app.route('/api/user/:id').get(async (req, res) => {
      let id = req.params.id.padEnd(24, '0')
      let user = await User.findOne({_id: id}, {mail: 1, google_mail: 1})
      return res.status(200).json({user: user})

    })
    app.route('/api/user/').get(async (req, res) => {
      console.log(req.user);
      return res.status(200).json({ user: req.user })
    })
      .put(async (req, res) => {
        if (req.user === undefined) return res.status(401).json({ error: 'User must be logged in' })
        let user = await UserService.getUser(req.user)
        if (user.google_mail != undefined) return res.status(400).json({ error: "User must logged in via Mail(not Google Auth)" })
        req.body.mail = user.mail;
        return res.status(200).json(await UserService.updateUser(req.user, req.body))
      })
  }
}

export default UserController