import { patchUser } from '../api';
import { ROLES } from '../constants';
import { sessions } from '../sessions';

export const editUser = async (session, userData, userId) => {
	const accessRoles = [ROLES.STUDENT];

	// console.log(userData);

	const access = sessions.access(session, accessRoles);

	if (!access) {
		return {
			error: 'Недостаточно прав',
			res: null,
		};
	}

	const editUser = await patchUser(userData, userId);

	return {
		error: null,
		res: editUser,
	};
};
