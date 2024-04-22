import { transformerUser } from '../transformers';

export const patchUser = (userData, userId) =>
	fetch(`http://localhost:3500/users/${userId}`, {
		method: 'PATCH',
		headers: { 'Content-type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			email: userData.email,
			password: userData.password,
			telephone: userData.telephone,
			firstname: userData.firstName,
			lastname: userData.lastName,
		}),
	})
		.then((res) => res.json())
		.then((loadedUser) => loadedUser && transformerUser(loadedUser));
