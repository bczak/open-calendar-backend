import express from 'express'
import Calendar from '../model/calendar'
import Member from '../model/member'
import CalendarService from '../service/calendar'
export default class InviteController {
  public static config(app: express.Application) {
    app.post('/api/invite/:id/:mail', async (req, res) =>{
      let calendar = await Calendar.findOne({_id: req.params.id})
      let user: any = req.user;
      let member = await Member.findOne({calendar: calendar?._id, user: user._id})
      // @ts-ignore
      if(!member || !member.canInvite) {
        return res.status(400).json({error: "You do not have access to invite to this calendar"})
      }
      let person = await CalendarService.addMember(req.params.mail, calendar)
      if(person == null) {
        return res.status(404).json({error: "User does not exist"})
      }
      return res.status(200).json({user: person})
    })
  }
}