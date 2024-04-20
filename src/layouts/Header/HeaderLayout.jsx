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
					<Button btnBlue1 link={true} to="/authorization">
						ВОЙТИ
					</Button>
				</div>
			</div>
		</header>
	);
};
