import {Document, model, Model, Schema, Types} from "mongoose";

export interface IUser {
	first_name: String,
	last_name: String,
	username: String,
	password: String,
	google_id: Number,
	google_mail: String,
	mail: String
}

interface IUserDocument extends IUser, Document {

}

interface IUserModel extends Model<IUserDocument> {
}

const UserSchema = new Schema({
	first_name: String,
	last_name: String,
	username: String,
	password: String,
	google_id: Number,
	google_mail: String,
	mail: String
});

const UserModel = model<IUserDocument>("user", UserSchema);

export default UserModel;
