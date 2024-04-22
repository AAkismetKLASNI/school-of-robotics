export const getSession = (hash) =>
	fetch(`http://localhost:3500/sessions?hash=${hash}`)
		.then((res) => res.json())
		.then(([loadedSession]) => loadedSession);
