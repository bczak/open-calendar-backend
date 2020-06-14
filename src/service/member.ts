import CalendarService from "./calendar"
import Calendar from "../model/calendar";
import User from "../model/user";

export default class MemberService {
  public static async isMember(user: any, calendar: any): Promise<boolean> {
    let member = await CalendarService.getMember(calendar, user);
    if (!member) {
      return false;
    }
    return true;
  }
}
