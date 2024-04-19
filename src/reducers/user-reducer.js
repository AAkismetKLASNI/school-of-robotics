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
		case '':
			break;

		default:
			return state;
	}
};
