import * as express from 'express'
import passport from 'passport'
import {User} from '../model/user'
import {getRandomName} from "../utils";

class UserController {
	public static config(app: express.Application) {
		app.route('/api/user').get((req, res) => {
			if (req.user === undefined) {
				req.user = {mail: 'anonymous'}
			}
			return res.status(200).json({user: req.user})
		})
	}
}

export default UserController