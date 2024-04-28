import { Routes, Route } from 'react-router-dom';
import {
	PrimaryLayout,
	AuthorizationContainer,
	PersonalAccountContainer,
	RegistrationContainer,
	CoursesContainer,
	AboutUsLayout,
} from '../../pages';
import { Container } from '../../ui-components';

export const MainLayout = () => {
	return (
		<main>
			<Container>
				<Routes>
					<Route path="/" element={<PrimaryLayout />} />
					<Route path="/about-us" element={<AboutUsLayout />} />
					<Route path="/courses" element={<CoursesContainer />} />
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
			</Container>
		</main>
	);
};
