import { NavLink } from 'react-router-dom';
import { Container } from '../../ui-components';
import styled from './Footer.module.css';

export const FooterLayout = () => {
	return (
		<footer className={styled.footer}>
			<Container>
				<div className={styled.wrapper}>
					<div className={styled.socialNetwork}>
						<img
							src="https://i.postimg.cc/mZSfQ0W8/Group-6.png"
							border="0"
							alt="Group-6"
						/>
						<img
							src="https://i.postimg.cc/FHZSyFsD/inst.png"
							border="0"
							alt="inst"
						/>
						<img
							src="https://i.postimg.cc/DzDy3Rwq/Group-7.png"
							border="0"
							alt="Group-7"
						/>
					</div>
					<div className={styled.documents}>
						<span>договор-оферта</span>
						<span>политика конфиденциальности</span>
					</div>
					<nav className={styled.nav}>
						<NavLink to="/">ГЛАВНАЯ</NavLink>
						<NavLink to="/about-us">О НАС</NavLink>
						<NavLink to="/courses">КУРСЫ</NavLink>
						<NavLink to="/media">МЕДИА</NavLink>
					</nav>
				</div>
			</Container>
		</footer>
	);
};
