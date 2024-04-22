import { useSelector } from 'react-redux';
import { server } from '../bff/server';
import { useCallback } from 'react';
import { sessionSelector } from '../selectors';

export const useRequestServer = () => {
	const session = useSelector(sessionSelector);

	return useCallback(
		(operation, ...params) => {
			const request = ['checkingLogging', 'logout', 'editUser'].includes(
				operation,
			)
				? [session, ...params]
				: params;

			return server[operation](...request);
		},
		[session],
	);
};
