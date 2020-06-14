import User from "../model/user";

export default class UserService {
  public static async getUser(user: any): Promise<any> {
    if (user == undefined) {
      return User.findOne({ mail: 'anonymous' }, { mail: 1, first_name: 1, last_name: 1, google_mail: 1, google_id: 1 })
    }
    console.log(user);
    
    return User.findOne({ _id: user._id }, { mail: 1, first_name: 1, last_name: 1, google_mail: 1, google_id: 1 })
  }
}