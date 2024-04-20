import { transformerUser } from '../transformers';

export const getUsers = (email) =>
	fetch(`http://localhost:3500/users?email=${email}`)
		.then((res) => res.json())
		.then(([user]) => user && transformerUser(user));
