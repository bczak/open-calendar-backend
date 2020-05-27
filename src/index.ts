import app from './server'
import {PORT} from './conf';

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})