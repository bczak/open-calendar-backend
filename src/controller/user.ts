import * as express from 'express'
import UserService from "../service/user";
import User from '../model/user';
import { runInNewContext } from 'vm';

class UserController {
	public static config(app: express.Application) {
		app.route('/api/user').get(async (req, res) => {
			req.user = await UserService.getUser(req.user)
			if (req.user == null) {
				return res.status(200).json({ user: { mail: 'anonymous' } })
			}
			return res.status(200).json({ user: req.user })
    })
    .post(async (req, res) => {
      if(req.user === undefined) return res.status(401).json({error: 'User must be logged in'})
      let user = await UserService.getUser(req.user)
      if(user.google_mail != undefined) return res.status(400).json({error: "User must logged in via Mail(not Google Auth)"})
      req.body.mail = user.mail;
      return res.status(200).json(await UserService.updateUser(req.user, req.body))
    })
	}
}

export default UserController