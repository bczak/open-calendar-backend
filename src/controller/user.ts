import * as express from 'express'
import UserService from "../service/user";

class UserController {
	public static config(app: express.Application) {
		app.route('/api/user').get(async (req, res) => {
			req.user = await UserService.getUser(req.user)
			if (req.user == null) {
				return res.status(200).json({ user: { mail: 'anonymous' } })
			}
			return res.status(200).json({ user: req.user })
		})
	}
}

export default UserController