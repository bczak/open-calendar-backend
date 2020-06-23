import express, { Application } from 'express'
import bodyParser from "body-parser";
import cors from 'cors';
import mongoose from "mongoose";
import { CLIENT_ID, CLIENT_SECRET, MONGO } from "./conf";
import passport from "passport";
import cookieParser from 'cookie-parser'
import session from 'express-session'
import AuthController from "./controller/auth";
import UserController from "./controller/user";
import { GoogleStrategy, LocalStrategy } from "./strategy";
import CalendarController from "./controller/calendar";
import EventController from "./controller/event";
import InviteController from "./controller/invite";
import UserService from './service/user'
import User from "./model/user";
import process from 'process'

class Server {
  public app: Application;

  constructor() {
    this.app = express();
    this.config().then(null).catch((e) => {
      console.log(e);
      process.exit(-1)
    })
  }


  private async config() {
    //Connect to MongoDB
    mongoose.Promise = global.Promise;
    try {
      await mongoose.connect(MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
    } catch (e) {
      throw new Error('Could not connect to MongoDB')
    }
    console.log("Connected")
    // insert global anonymous user
    await User.updateOne({ mail: 'anonymous' }, { $set: { mail: 'anonymous' } }, { upsert: true })
    //Allows us to receive requests with data in json format
    this.app.use(bodyParser.json({ limit: '50mb' }));

    //Allows us to receive requests with data in x-www-form-urlencoded format
    this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

    // Enables cookie parser
    this.app.use(cookieParser());
    //Enables sessions
    this.app.use(session({ secret: CLIENT_SECRET, resave: true, saveUninitialized: true }));

    //Enables cors
    this.app.use(cors());

    this.app.use(passport.initialize());
    this.app.use(passport.session());
    this.app.use(async (req, res, next) => {
      //interceptors
      let time = Date.now();
      req.user = await UserService.getUser(req.user) || req.user;
      await next();
      console.log(req.method + " request from " + JSON.stringify(req.user) + " took " + (Date.now() - time) + "ms");

    })

    //Enables Google and Mail Auth
    //@ts-ignore
    if (CLIENT_SECRET != '') {
      //disable google auth if there is no credentials
      passport.use(GoogleStrategy);
    }
    passport.use('local', LocalStrategy);
    passport.serializeUser((user, cb) => cb(null, user));
    passport.deserializeUser((obj, cb) => cb(null, obj));

    this.app.use('/', express.static('src/static/app'))
    this.app.use('/app', express.static('src/static/app'))
    this.app.use('/app:*', express.static('src/static/app'))


    //Add controllers
    AuthController.config(this.app)
    UserController.config(this.app)
    CalendarController.config(this.app)
    EventController.config(this.app)
    InviteController.config(this.app)

  }
}

export default new Server().app