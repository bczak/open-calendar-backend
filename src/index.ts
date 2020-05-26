import * as express from "express";
import {connect} from "./database";
import conf from '../conf'
import app from "./server";

const port = conf.PORT;

async function main() {
	await connect();
	await app.listen(port)
}

main().then(() => {
	console.log(`Server started on http://localhost:${port}`);
});
