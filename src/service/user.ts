import User from "../model/user";
import sanitizer from 'sanitizer'

export default class UserService {
  public static async getUser(user: any): Promise<any> {

    if (user == undefined) {
      return User.findOne({ mail: 'anonymous' })
    } else {
      let tmp = await User.findOne({ google_mail: user.google_mail }, { first_name: 1, last_name: 1, google_mail: 1 })
      console.log(tmp);

      if (tmp == null) {
        tmp = await User.findOne({ mail: user.mail }, { mail: 1, first_name: 1, last_name: 1 })
        if (!tmp) return User.findOne({ mail: 'anonymous' })
        return tmp
      } else {
        return tmp
      }
    }
  }
  public static async updateUser(old: any, user: any): Promise<any> {
    let last = sanitizer.escape(user.last_name);
    let first = sanitizer.escape(user.last_name);
    await User.updateOne({ _id: old._id }, { $set: { last_name: last, first_name: first } })
    return UserService.getUser(old);
  }
}