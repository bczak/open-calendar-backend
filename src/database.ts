import * as Mongoose from "mongoose";
import conf from '../conf'

let database: Mongoose.Connection;
export const connect = async () => {
	if (database) {
		return;
	}
	await Mongoose.connect(conf.MONGO_URL, {
		useNewUrlParser: true,
		useFindAndModify: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	});
	database = Mongoose.connection;
	database.once("open", async () => {
		console.log("Connected to database");
	});
	database.on("error", () => {
		console.log("Error connecting to database");
	});
};

export const disconnect = async () => {
	if (!database) {
		return;
	}
	await Mongoose.disconnect();
};