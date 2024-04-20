import { getUsers } from '../api';
import { sessions } from '../sessions';

export const authorize = async (authEmail, authPassword) => {
	const user = await getUsers(authEmail);

	if (!user) {
		return {
			error: 'Пользователя не существует',
			res: null,
		};
	}

	const {
		id,
		email,
		password,
		telephone,
		firstname,
		lastname,
		gender,
		roleId,
	} = user;

	if (authPassword !== password) {
		return {
			error: 'Неверный пароль',
			res: null,
		};
	}

	const session = await sessions.create(user);

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
			session,
		},
	};
};
