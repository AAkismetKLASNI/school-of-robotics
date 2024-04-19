import { Routes, Route } from 'react-router-dom';
import styled from './Main.module.css';

export const MainLayout = () => {
	return (
		<main className={styled.main}>
			<div className={styled.container}>
				<Routes>
					<Route path="/" element={<div>Главная</div>} />
					<Route path="/about-us" element={<div>О нас</div>} />
					<Route path="/courses" element={<div>Курсы</div>} />
					<Route path="/media" element={<div>Медиа</div>} />
					<Route path="/personal-account" element={<div>Личный кабинет</div>} />
				</Routes>
			</div>
		</main>
	);
};
