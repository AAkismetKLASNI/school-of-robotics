import { NavLink } from 'react-router-dom';
import { Button } from '../../ui-components';
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
					<Button btnBlue1>
						<NavLink to="/personal-account">ВОЙТИ</NavLink>
					</Button>
				</div>
			</div>
		</header>
	);
};
