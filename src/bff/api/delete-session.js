export const deleteSession = (id) =>
	fetch(`http://localhost:3500/sessions/${id}`, { method: 'DELETE' });
