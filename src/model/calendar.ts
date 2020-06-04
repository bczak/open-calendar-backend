import mongoose from "mongoose";

const CalendarSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  timezone: {
    type: String,
    default: "UTC"
  },
  type: {
    type: Boolean,
    default: true
  },
  events: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }]
})

const Calendar = mongoose.model("Calendar", CalendarSchema)
export default Calendar;
