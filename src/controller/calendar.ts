import * as express from 'express'
import CalendarService from "../service/calendar";
import sanitizer from 'sanitizer'
import Calendar from "../model/calendar";
import UserService from "../service/user";
import ObjectId from 'mongodb'
import rateLimit from 'express-rate-limit'
import Member from '../model/member';
import History from '../model/history';
import { getTimeZone } from '../utils';

class CalendarController {
	public static config(app: express.Application) {
		// return all calendars of signed user
		app.route('/api/calendar/').get(async (req, res) => {
			// return empty array if user is not signed in
			if (req.user === undefined) return res.status(200).json([]);
			return res.status(200).json(await CalendarService.getCalendars(req.user));
		})
		const createCalendarLimiter = rateLimit({
			windowMs: 6 * 60 * 60 * 1000, // 6 hour window
			max: 5, // start blocking after 5 requests
			message: JSON.stringify({
				error:
					"Too many calendars created from this IP, please try again after 6 hours"
			})
		});
		app.put('/api/calendar/:id', async (req, res) => {
			if (req.user == undefined && !req.body.type) {
				return res.status(400).json({ error: 'Only registered users can create private calendars' })
			}
			let user: any = await UserService.getUser(req.user)

			let calendar: any = await Calendar.findById(req.params.id.padEnd(24, '0'))
			let members: Array<any> = await CalendarService.getMembers(calendar._id)
			if (!calendar || members.filter(e => e.user.toString() == user._id.toString()).length <= 0 || !calendar.type) {
				return res.status(404).json({ error: 'Calendar does not exist or you do not have access to change it' })
			}
			calendar = await CalendarService.updateCalendar(calendar, req.body);
			console.log(calendar)
			return res.status(200).json(calendar);

		})
		app.post('/api/calendar', createCalendarLimiter, async (req, res) => {
			if (req.user == undefined && !req.body.type) {
				return res.status(400).json({ error: 'Only registered users can create private calendars' })
			}
			req.user = await UserService.getUser(req.user)
			req.body.title = sanitizer.escape(req.body.title)
			req.body.timezone = getTimeZone(sanitizer.escape(req.body.timezone))
			let obj = await CalendarService.createCalendar(req.body, req.user)
			return res.status(201).json(obj)
		})
	}
}

export default CalendarController