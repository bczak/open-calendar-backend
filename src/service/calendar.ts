import mongoose from "mongoose";
import User from '../model/user'
import Calendar from '../model/calendar'
import Member from "../model/member";
import History from '../model/history'

export default class CalendarService {
  public static async getCalendars(user: any): Promise<Array<any>> {
    // try google user
    let extUser = await User.findOne({ google_mail: user.mail })
    let cals: Array<any> = [];
    if (extUser != null) cals = await Calendar.find({ creator: extUser._id }).populate('creator')
    // try mail user
    extUser = await User.findOne({ mail: user.mail })
    if (extUser != null) cals = await Calendar.find({ creator: extUser._id }).populate('creator')
    return cals;
  }
  public static async createCalendar(cal: any, user: any): Promise<any> {
    cal.creator = user._id;
    let calendar = new Calendar(cal)
    let member = new Member({ user: user._id, calendar: calendar._id })
    calendar.save();
    member.save();
    let obj: any = calendar;
    obj = { ...obj._doc, members: [user], events: [], creator: user }
    // save record to history
    new History({ user: user, calendar: calendar, status: 'created' }).save()
    return obj
  }
  public static async getMembers(id: Number): Promise<Array<any>> {
    let members = await Member.find({calendar: id})
    return members
  }
  public static async updateCalendar(oldCal: any, newCal: any): Promise<any> {
    delete newCal._id
    await Calendar.updateOne({_id: oldCal._id}, {$set: newCal})
    return Calendar.findOne({_id: oldCal._id})
  }
}