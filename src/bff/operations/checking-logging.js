import { ROLES } from '../constants';
import { sessions } from '../sessions';

export const checkingLogging = async (session) => {
	const accessRoles = [ROLES.STUDENT];

	const access = await sessions.access(session, accessRoles);

	if (!access) {
		return {
			error: 'Требуется авторизация',
			res: null,
		};
	}

	return {
		error: null,
		res: true,
	};
};
