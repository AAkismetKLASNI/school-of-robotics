export const transformerUser = (user) => ({
	id: user.id,
	email: user.email,
	password: user.password,
	telephone: user.telephone,
	firstname: user.firstname,
	lastname: user.lastname,
	gender: user.gender,
	roleId: user.role_id,
});
