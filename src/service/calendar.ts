import User from '../model/user'
import Calendar from '../model/calendar'
import Member from "../model/member";
import History from '../model/history'
import Event from '../model/event'
import UserService from "./user";
import sanitizer from "sanitizer";

export default class CalendarService {
  public static async getCalendars(user: any): Promise<Array<any>> {
    // try google user
    let extUser = await User.findOne({ google_mail: user.mail })
    let cals: Array<any> = [];
    if (extUser != null) cals = await Calendar.find({ creator: extUser._id }).populate('creator')
    // try mail user
    extUser = await User.findOne({ mail: user.mail })
    if (extUser != null) {
      cals = await Calendar.find({ creator: extUser._id }).populate('creator')
      cals = cals.map(e => { e.creator.password = undefined; return e; })
    }
    return cals;
  }

  public static async removeAnonymous(calendar: any) {
    let anonymous: any = await User.find({ mail: 'anonymous' })
    await Member.deleteMany({ calendar: calendar._id, user: anonymous._id })
  }

  public static async createCalendar(cal: any, user: any): Promise<any> {
    cal.creator = user._id;
    let calendar = new Calendar(cal)
    let member = new Member({ user: user._id, calendar: calendar._id })
    await calendar.save();
    await member.save();
    let obj: any = calendar;
    let members = [user]
    // add anonymous people to members if calendar is public
    if (user.mail != 'anonymous' && cal.type === true) {

      let anon = await User.findOne({ mail: 'anonymous' })
      //@ts-ignore
      let mem = new Member({ user: anon._id, calendar: calendar.id })
      await mem.save()
      members.push(mem)
    }

    obj = { ...obj._doc, members: members, events: [], creator: user }
    // save record to history
    await new History({ user: user, calendar: calendar, status: 'created' }).save()
    return obj
  }

  public static async getMembers(id: Number): Promise<Array<any>> {
    return Member.find({ calendar: id });
  }


  public static async updateCalendar(oldCal: any, newCal: any, user: any): Promise<any> {
    delete newCal._id
    await Calendar.updateOne({ _id: oldCal._id }, { $set: newCal })
    let out = await Calendar.findOne({ _id: oldCal._id })
    new History({ user: user._id, calendar: out, status: 'updated' })
    return Calendar.findOne({ _id: oldCal._id })
  }

  public static async getMember(cal: any, user: any): Promise<any> {
    user = await UserService.getUser(user);
    return Member.findOne({ user: user._id, calendar: cal._id });
  }

  public static async addEvent(cal: any, event: any, user: any): Promise<any> {
    let notes = event.notes || [];
    console.log(event)
    if (notes.length > 0) {
      notes = notes.filter((e: any) => e.length > 0).map((e: any) => {
        let tmp: any = {}
        tmp.user = user._id;
        tmp.text = sanitizer.escape(e);
        return tmp
      })
    }

    event.notes = notes;
    if (!event.title) return null;
    event.title = sanitizer.escape(event.title)
    event.location = sanitizer.escape(event.location)
    event.color = sanitizer.escape(event.color)
    if (!event.startDate) return null;
    event.start = new Date(event.start)

    if (!event.end) return null;
    event.end = new Date(event.end)
    if (event.start > event.end) return { error: 'Start Date cannot be later than End Date' }
    let obj = new Event(event);
    // @ts-ignore
    await Calendar.updateOne({ _id: cal._id }, { $push: { events: obj } })
    await obj.save();
    await new History({ user: user, calendar: { _id: cal._id }, event: event, status: 'created' }).save()
    return obj
  }
  public static async updateEvent(event: any, user: any): Promise<any> {
    let notes = event.notes || [];
    console.log(event)
    if (notes.length > 0) {
      notes = notes.filter((e: any) => e.length > 0).map((e: any) => {
        let tmp: any = {}
        tmp.user = user._id;
        tmp.text = sanitizer.escape(e);
        return tmp
      })
    }

    event.notes = notes;
    if (!event.title) return null;
    event.title = sanitizer.escape(event.title)
    event.location = sanitizer.escape(event.location)
    event.color = sanitizer.escape(event.color)
    if (!event.startDate) return null;
    event.start = new Date(event.startDate)

    if (!event.end) return null;
    event.end = new Date(event.end)
    if (event.start > event.end) return { error: 'Start Date cannot be later than End Date' }
    let obj = new Event(event);
    // @ts-ignore
    let cal: any = await Calendar.findOne({ events: { _id: event._id } })

    await Calendar.updateOne({ _id: cal._id }, { $pull: { events: {_id: event._id }} })
    await Calendar.updateOne({ _id: cal._id }, { $push: { events: obj } })
    await obj.save();
    console.log(obj);
    
    await new History({ user: user, event: event, status: 'updated' }).save()
    return obj
  }
}