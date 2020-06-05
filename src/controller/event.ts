import * as express from 'express'
import User from "../model/user";
import UserService from "../service/user";
import CalendarService from "../service/calendar";
import Calendar from "../model/calendar";
import sanitizer from "sanitizer";

export default class EventController {
	public static config(app: express.Application) {
		app.route('/api/event/:id').post	(async (req, res) => {
			let user = await UserService.getUser(req.user)
			let calendar: any = await Calendar.findById(req.params.id.padEnd(24, '0'))
			let member = await CalendarService.getMember(calendar, user);
			if (!member) {
				return res.status(401).json({error: 'Calendar does not exist or has private access'})
			} else if(!member.canCreate) {
				return res.status(401).json({error: 'Yopu do not have rights to perfom this action'})
			}
			let result = await CalendarService.addEvent(calendar, req.body, user);
			res.status(201).json(result);
		})
	}
}