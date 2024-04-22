import { NavLink } from 'react-router-dom';
import { Button } from '../../ui-components';
import { useSelector } from 'react-redux';
import { roleIdSelector } from '../../selectors';
import styled from './Header.module.css';
import { ROLES } from '../../bff/constants';

export const HeaderLayout = () => {
	const roleId = useSelector(roleIdSelector);

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
					{roleId === ROLES.GUEST ? (
						<Button btnBlue1 link={true} to="/authorization">
							ВОЙТИ
						</Button>
					) : (
						<Button btnBlue1 link={true} to="/personal-account">
							ЛИЧНЫЙ КАБИНЕТ
						</Button>
					)}
				</div>
			</div>
		</header>
	);
};
