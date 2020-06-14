import User from "../model/user";
import sanitizer from 'sanitizer'

export default class UserService {
  public static async getUser(user: any): Promise<any> {
    if (user == undefined) {
      return User.findOne({ mail: 'anonymous' }, { mail: 1, first_name: 1, last_name: 1, google_mail: 1, google_id: 1 })
    }    
    return User.findOne({ _id: user._id }, { mail: 1, first_name: 1, last_name: 1, google_mail: 1, google_id: 1 })
  }
  public static async updateUser(old: any, user: any): Promise<any> {
    let last = sanitizer.escape(user.last_name);
    let first = sanitizer.escape(user.last_name);
    await User.updateOne({_id: old._id}, {$set:{last_name: last, first_name: first}})
    return UserService.getUser(old);
  }
 }