import { ACTION_TYPE } from '../actions/action-type';

const initialUser = {
	id: null,
	firstname: null,
	lastname: null,
	password: null,
	telephone: null,
	gender: null,
	email: null,
	roleId: null,
};

export const userReducer = (state = initialUser, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_USER:
			return { ...state, ...action.payload };
		default:
			return state;
	}
};
