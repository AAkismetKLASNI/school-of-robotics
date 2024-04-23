import { ROLES } from '../constants';
import { sessions } from '../sessions';

export const checkingLogging = async (hash) => {
	const accessRoles = [ROLES.STUDENT];

	const access = await sessions.access(hash, accessRoles);

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
