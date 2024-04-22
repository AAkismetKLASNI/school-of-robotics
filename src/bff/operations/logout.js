import { sessions } from '../sessions';

export const logout = async (hash) => {
	await sessions.remove(hash);
};
