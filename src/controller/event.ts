import * as express from 'express'
import User from "../model/user";
import UserService from "../service/user";
import CalendarService from "../service/calendar";
import Calendar from "../model/calendar";
import sanitizer from "sanitizer";
import Event from '../model/event'
import History from '../model/history'

export default class EventController {
  public static config(app: express.Application) {
    // checking access
    app.use(['/api/event/:id', '/api/event/:id/:event'], async (req, res, next) => {
      if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(404).json({ error: 'Calendar does not exist' })
      }
      if (req.params.event && !req.params.event.match(/^[0-9a-fA-F]{24}$/)) {

        return res.status(404).json({ error: 'Event does not exist' })
      }
      let user = req.user
      let calendar: any = await Calendar.findById(req.params.id)
      if (!calendar) return res.status(401).json({ error: 'Calendar does not exist or has private access' })
      let member = await CalendarService.getMember(calendar, user);
      if (!member) {
        return res.status(401).json({ error: 'Calendar does not exist or has private access' })
      } else if (!member.canCreate) {
        return res.status(401).json({ error: 'You do not have rights to perfom this action' })
      }
      return next();
    })
    app.route('/api/event/:id')
      .post(async (req, res) => {
        let calendar: any = await Calendar.findById(req.params.id)
        let result = await CalendarService.addEvent(calendar, req.body, (await UserService.getUser(req.user)));

        if (result == null) return res.status(400).json({ error: 'Event must have title, start date and end date' })
        res.status(201).json(result);
      })
      .get(async (req, res) => {
        let calendar: any = await Calendar.findById(req.params.id.padEnd(24, '0')).populate('events')
        return res.status(200).json(calendar.events)
      })
    app.route('/api/event/:id/:event')
      .put(async (req, res) => {
        if (req.params.event && !req.params.event.match(/^[0-9a-fA-F]{24}$/)) {

          return res.status(404).json({ error: 'Event does not exist' })
        }
        req.body._id = req.params.event;

        let event: any = await CalendarService.updateEvent(req.body, req.params.id, (await UserService.getUser(req.user)));

        if (event == null) return res.status(400).json({ error: 'Event must have title, start date and end date' })
        res.status(200).json(event)
      })
      .delete(async (req, res) => {
        if (req.params.event && !req.params.event.match(/^[0-9a-fA-F]{24}$/)) {

          return res.status(404).json({ error: 'Event does not exist' })
        }

        let result = await CalendarService.deleteEvent(req.params.event, req.params.id, (await UserService.getUser(req.user)))
        if (result) return res.status(404).json(result)
        return res.status(204).send()
      })
  }
}