import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
	title: String,
	start: Date,
	end: Date,
	color: String,
	location: String,
	notes: [{
		text: String,
		user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
	}],
	repeat: {type: String, default: ''}
})

const Event = mongoose.model('Event', EventSchema)

export default Event

