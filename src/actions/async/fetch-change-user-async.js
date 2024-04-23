import { setUser } from '../unasync/set-user';

export const fetchChangeUserAsync =
	(requestServer, userData, userId) => (dispatch) =>
		requestServer('editUser', userData, userId).then(({ error, res }) => {
			if (error) {
				return;
			}

			dispatch(setUser(res));
			sessionStorage.setItem('user', JSON.stringify({ ...res }));
		});
