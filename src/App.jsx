import { HeaderLayout, MainLayout, FooterLayout } from './layouts';
import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './actions';
import { useMatch } from 'react-router-dom';
import styled from './App.module.css';

export const App = () => {
	const test = useMatch('/about-us');
	console.log(test);

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
			{test ? (
				<>
					<HeaderLayout />
					<MainLayout />
					<FooterLayout />
				</>
			) : (
				<>
					<HeaderLayout />
					<MainLayout />
				</>
			)}
		</div>
	);
};
