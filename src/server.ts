import * as express from 'express'
import * as bodyParser from 'body-parser'
import UserModel from "./model/user";
import UserController from "./controller/user";
import AuthController from "./controller/auth";
import jwt from "./service/jwt";
import * as passport from 'passport'
import conf from '../conf'
class Server {
	public app: express.Application
	
	constructor() {
		this.app = express();
		this.config()
	}
	
	private static authError(err, req, res, next) {
		if (err.name === 'UnauthorizedError') {
			res.status(401).json({error: 'Invalid token'})
		}
	}
	
	
	
	private config() {
		// support application/json type post data
		this.app.use(bodyParser.json());
		//support application/x-www-form-urlencoded post data
		this.app.use(bodyParser.urlencoded({extended: false}));
		//support jwt
		this.app.use(jwt)
		this.app.use(Server.authError)
		this.app.use(require('cookie-parser')())
		this.app.use(require('express-session')({
			secret: conf.SIGNATURE,
			resave: true,
			saveUninitialized: true
		}))
		
		
		// add google auth
		this.app.use(passport.initialize());
		this.app.use(passport.session());
		AuthController.googleAuth()
		
		//add controllers
		UserController.routes(this.app)
		AuthController.routes(this.app)
		
	}
	
}

export default new Server().app;