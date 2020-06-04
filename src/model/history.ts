import mongoose from "mongoose";

const HistoryScema = new mongoose.Schema({
  user: Object,
  calendar: Object,
  status: String,
  date: {type: Date, default: new Date().getTime()},
  event: Object
})

const History = mongoose.model('History', HistoryScema)

export default History