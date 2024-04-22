import { Routes, Route } from 'react-router-dom';
import {
	PrimaryLayout,
	AuthorizationContainer,
	PersonalAccountContainer,
	RegistrationContainer,
} from '../../pages';
import styled from './Main.module.css';

export const MainLayout = () => {
	return (
		<main className={styled.main}>
			<div className={styled.container}>
				<Routes>
					<Route path="/" element={<PrimaryLayout />} />
					<Route path="/about-us" element={<div>О нас</div>} />
					<Route path="/courses" element={<div>Курсы</div>} />
					<Route path="/media" element={<div>Медиа</div>} />
					<Route path="/authorization" element={<AuthorizationContainer />} />
					<Route path="/registration" element={<RegistrationContainer />} />
					<Route
						path="/personal-account"
						element={<PersonalAccountContainer />}
					/>
					<Route
						path="*"
						element={<div>Такой страницы не существует :(</div>}
					/>
				</Routes>
			</div>
		</main>
	);
};
