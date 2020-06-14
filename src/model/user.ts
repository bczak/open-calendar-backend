import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  mail: String,
  first_name: String,
  last_name: String,
  password: {
    type: String,
    required: false
  },
  google_mail: {
    type: String,
    required: false
  },
  google_id: {
    type: String,
    required: false
  },
});
const User = mongoose.model("User", UserSchema)

export default User;
