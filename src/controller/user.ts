import * as express from 'express'
import * as passport from 'passport'

class UserController {
	public static routes(app: express.Application): void {
		// returns current user
		app.route('/api/user/')
			.get(async (req: express.Request, res: express.Response) => {
				// @ts-ignore
				if(req.isAuthenticated()) {
					// @ts-ignore
					return res.status(200).json({user: req.currentUser });
				} else {
					return res.status(401).json({error: 'Unauthorized', code: 401})
				}
			})
	}
}

export default UserController