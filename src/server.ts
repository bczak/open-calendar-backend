import express, {Application} from 'express'
import bodyParser from "body-parser";
import cors from 'cors';
import mongoose from "mongoose";
import {CLIENT_ID, CLIENT_SECRET, DOMAIN, MONGO} from "./conf";
import * as Google from 'passport-google-oauth20'
import * as Local from 'passport-local'
import passport from "passport";
import cookieParser from 'cookie-parser'
import session from 'express-session'
import {User} from "./model/user";
import AuthController from "./controller/auth";
import UserController from "./controller/user";
import {GoogleStrategy, LocalStrategy} from "./strategy";


class Server {
	public app: Application;
	
	constructor() {
		this.app = express();
		this.config()
	}
	
	private async config() {
		//Connect to MongoDB
		mongoose.Promise = global.Promise;
		await mongoose.connect(MONGO, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
		console.log("Connected")
		
		//Allows us to receive requests with data in json format
		this.app.use(bodyParser.json({limit: '50mb'}));
		
		//Allows us to receive requests with data in x-www-form-urlencoded format
		this.app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
		
		// Enables cookie parser
		this.app.use(cookieParser());
		//Enables sessions
		this.app.use(session({secret: CLIENT_SECRET, resave: true, saveUninitialized: true}));
		
		//Enables cors
		this.app.use(cors());
		
		this.app.use(passport.initialize());
		this.app.use(passport.session());
		
		//Enables Google and Mail Auth
		passport.use(GoogleStrategy);
		passport.use('local', LocalStrategy);
		passport.serializeUser( (user, cb) => cb(null, user));
		passport.deserializeUser((obj, cb) => cb(null, obj));
		
		//Add controllers
		AuthController.config(this.app)
		UserController.config(this.app)
	}
}

export default new Server().app