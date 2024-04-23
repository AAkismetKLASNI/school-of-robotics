export const patchSession = (id, user) =>
	fetch(`http://localhost:3500/sessions/${id}`, {
		method: 'PATCH',
		headers: { 'Content-type': 'application/json;charset=utf-8' },
		body: JSON.stringify({ user }),
	});
