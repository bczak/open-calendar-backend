import * as express from 'express'
import CalendarService from "../service/calendar";
import sanitizer from 'sanitizer'
import Calendar from "../model/calendar";
import UserService from "../service/user";
import ObjectId from 'mongodb'
import rateLimit from 'express-rate-limit'
import Member from '../model/member';
import History from '../model/history';
import { getOffset, getTimeZone } from '../utils';
import moment from 'moment';
import MemberService from '../service/member';

class CalendarController {
  public static config(app: express.Application) {
    // return all calendars of signed user

    const createCalendarLimiter = rateLimit({
      windowMs: 6 * 60 * 60 * 1000, // 6 hour window
      max: 5, // start blocking after 5 requests
      message: JSON.stringify({
        error:
          "Too many calendars created from this IP, please try again after 6 hours"
      })
    });

    app.put('/api/calendar/:id', async (req, res) => {
      if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(404).json({ error: 'Calendar does not exist' })
      }
      if (req.user == undefined && !req.body.type) {
        return res.status(400).json({ error: 'Only registered users can change type of calendars' })
      }
      let user: any = req.user
      let calendar: any = await Calendar.findById(req.params.id.padEnd(24, '0'))
      let members: Array<any> = await CalendarService.getMembers(calendar._id)
      if (!calendar || members.filter(e => e.user.toString() == user._id.toString()).length <= 0 || (!calendar.type && user.mail == 'anonymous')) {
        return res.status(404).json({ error: 'Calendar does not exist or you do not have access to change it' })
      }
      await CalendarService.removeAnonymous(calendar);
      calendar = await CalendarService.updateCalendar(calendar, req.body, user);
      // remove anonymous member from calndar if type was changed
        return res.status(200).json(calendar);

    })
    app.post('/api/calendar', createCalendarLimiter, async (req, res) => {
      if (req.user == undefined && !req.body.type) {
        return res.status(400).json({ error: 'Only registered users can create private calendars' })
      }
      let user = req.user
      req.body.title = sanitizer.escape(req.body.title)
      req.body.timezone = getTimeZone(sanitizer.escape(req.body.timezone))
      let obj = await CalendarService.createCalendar(req.body, user)
      return res.status(201).json(obj)
    })
    app.get('/api/calendar/:id', async (req, res) => {
      let user: any = req.user
      if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(404).json({ error: 'Calendar does not exist' })
      }
      let calendar: any = await Calendar.findById(req.params.id.padEnd(24, '0')).populate('events')
      if (!calendar) return res.status(404).json({ error: 'Calendar does not exist or you do not have access to read it' })
      if (!calendar.type && !(await MemberService.isMember(user, calendar))) {
        return res.status(404).json({ error: 'Calendar does not exist or you do not have access to read it' })
      }

      let events = calendar.events
      events = events.map((e: any) => {
        e.start = moment(e.start).add(getOffset(calendar.timezone), "minutes").toISOString()
        e.end = moment(e.end).add(getOffset(calendar.timezone), "minutes").toISOString()
        return e;
      })
      let members = await CalendarService.getMembers(calendar)
      let obj = { ...calendar._doc, members, events }
      return res.status(200).json(obj)

    })
    app.delete('/api/calendar/:id', async (req, res) => {
      let user: any = req.user
      if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(404).json({ error: 'Calendar does not exist' })
      }
      let calendar: any = await Calendar.findById(req.params.id.padEnd(24, '0'))
      if (!calendar) return res.status(404).json({ error: 'Calendar does not exist or you do not have access to delete it' })
      if (!calendar || !(await MemberService.isMember(user, calendar))) {
        return res.status(404).json({ error: 'Calendar does not exist or you do not have access to delete it' })
      }
      await Calendar.deleteOne({ _id: calendar._id })
      await Member.deleteMany({ calendar: calendar._id })
      return res.status(200).json({ status: true })
    })
    app.get('/api/calendar', async (req, res) => {
      // return empty array if user is not signed in
      if (req.user === undefined) return res.status(200).json([]);
      return res.status(200).json(await CalendarService.getCalendars(req.user));
    })

  }
}

export default CalendarController