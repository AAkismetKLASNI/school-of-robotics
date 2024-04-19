import { NavLink } from 'react-router-dom';
import styled from './Header.module.css';

export const HeaderLayout = () => {
	return (
		<header className={styled.header}>
			<div className={styled.container}>
				<div className={styled.wrapper}>
					<nav>
						<NavLink to="/">ГЛАВНАЯ</NavLink>
						<NavLink to="/about-us">О НАС</NavLink>
						<NavLink to="/courses">КУРСЫ</NavLink>
						<NavLink to="/media">МЕДИА</NavLink>
					</nav>
					<NavLink to="/personal-account" className={styled.buttonLog}>
						ВОЙТИ
					</NavLink>
				</div>
			</div>
		</header>
	);
};
