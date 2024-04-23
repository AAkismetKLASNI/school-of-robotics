import { getSession, patchSession, patchUser } from '../api';
import { ROLES } from '../constants';
import { sessions } from '../sessions';

export const editUser = async (hash, userData, userId) => {
	const accessRoles = [ROLES.STUDENT];

	const access = sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: 'Недостаточно прав',
			res: null,
		};
	}

	const editUser = await patchUser(userData, userId);

	const {
		id,
		email,
		password,
		telephone,
		firstname,
		lastname,
		gender,
		roleId,
	} = editUser;

	const session = await getSession(hash);

	await patchSession(session?.id, editUser);

	return {
		error: null,
		res: {
			id,
			email,
			password,
			telephone,
			firstname,
			lastname,
			gender,
			roleId,
			session: hash,
		},
	};
};
