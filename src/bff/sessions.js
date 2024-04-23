import { addSession, deleteSession, getSession } from './api';

export const sessions = {
	create: async (user) => {
		const hash = Math.random().toFixed(50);

		await addSession(hash, user);

		return hash;
	},

	remove: async (hash) => {
		const session = await getSession(hash);

		if (!session) {
			return;
		}

		deleteSession(session.id);
	},

	access: async (hash, accessRoles) => {
		const session = await getSession(hash);

		if (!session) {
			return;
		}

		return !!session.user && accessRoles.includes(session?.user?.roleId);
	},
};
