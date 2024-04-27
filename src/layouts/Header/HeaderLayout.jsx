import { NavLink } from 'react-router-dom';
import { Button, Container } from '../../ui-components';
import { useSelector } from 'react-redux';
import { roleIdSelector } from '../../selectors';
import styled from './Header.module.css';
import { ROLES } from '../../bff/constants';

export const HeaderLayout = () => {
	const roleId = useSelector(roleIdSelector);

	return (
		<header className={styled.header}>
			<Container>
				<div className={styled.wrapper}>
					<nav>
						<NavLink to="/">ГЛАВНАЯ</NavLink>
						<NavLink to="/about-us">О НАС</NavLink>
						<NavLink to="/courses">КУРСЫ</NavLink>
						<NavLink to="/media">МЕДИА</NavLink>
					</nav>
					{roleId === ROLES.GUEST ? (
						<Button btnBlue1 link="/authorization">
							ВОЙТИ
						</Button>
					) : (
						<Button btnBlue1 link="/personal-account">
							ЛИЧНЫЙ КАБИНЕТ
						</Button>
					)}
				</div>
			</Container>
		</header>
	);
};
