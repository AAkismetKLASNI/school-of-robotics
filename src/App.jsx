import { HeaderLayout, MainLayout } from './layouts';
import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './actions';
import styled from './App.module.css';

export const App = () => {
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		const user = sessionStorage.getItem('user');

		if (!user) {
			return;
		}

		const readyUser = JSON.parse(user);

		dispatch(setUser(readyUser));
	}, []);

	return (
		<div className={styled.content}>
			<HeaderLayout />
			<MainLayout />
		</div>
	);
};
