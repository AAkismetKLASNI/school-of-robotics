import { addSession } from './api';

export const sessions = {
	create: async (user) => {
		const hash = Math.random().toFixed(50);

		await addSession(hash, user);

		return hash;
	},
};
