import mongoose from "mongoose";

const MemberScema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  calendar: { type: mongoose.Schema.Types.ObjectId, ref: 'Calendar' },
  canCreate: { type: Boolean, default: true },
  canEdit: { type: Boolean, default: true },
  canInvite: { type: Boolean, default: true },
  canDelete: { type: Boolean, default: true },
  
})

const Member = mongoose.model('Member', MemberScema);
export default Member;
