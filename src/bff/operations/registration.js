import { getUsers, addUser } from '../api';
import { sessions } from '../sessions';

export const registration = async (regEmail, regPass) => {
	const existUser = await getUsers(regEmail);

	if (existUser) {
		return {
			error: 'Такой email уже занят',
			res: null,
		};
	}

	const user = await addUser(regEmail, regPass);

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
