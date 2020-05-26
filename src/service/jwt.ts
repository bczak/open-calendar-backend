import * as jwt from 'express-jwt';
import SIGNATURE from '../../conf'

const getTokenFromHeader = (req) => {
	if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
		return req.headers.authorization.split(' ')[1];
	}
}

export default jwt({
	secret: SIGNATURE,
	userProperty: 'token',
	getToken: getTokenFromHeader,
	credentialsRequired: false
})
