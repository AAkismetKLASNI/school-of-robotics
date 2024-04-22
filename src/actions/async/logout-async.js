import { dropUser } from '../unasync/drop-user';

export const logoutAsync = (requestServer, navigate) => (dispatch) =>
	requestServer('logout').then(() => {
		dispatch(dropUser);
		navigate('/authorization');
		sessionStorage.removeItem('user');
	});
