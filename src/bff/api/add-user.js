import { transformerUser } from '../transformers';

export const addUser = (email, password) =>
	fetch('http://localhost:3500/users', {
		method: 'POST',
		headers: { 'Content-type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			email,
			password,
			telephone: null,
			firstname: null,
			lastname: null,
			gender: 'men',
			role_id: '0',
		}),
	})
		.then((res) => res.json())
		.then((loadedUser) => loadedUser && transformerUser(loadedUser));
