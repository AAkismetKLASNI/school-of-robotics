import cx from 'classnames';
import { NavLink } from 'react-router-dom';
import styled from './Button.module.css';

export const Button = ({
	children,
	link = '',
	check,
	btnBlue1,
	btnBlue2,
	btnOrange1,
	btnOrange2,
	btnWhite1,
	...props
}) => {
	return (
		<>
			<button
				{...props}
				className={cx(styled.btn, {
					[styled['btnBlue1']]: btnBlue1,
					[styled['btnBlue2']]: btnBlue2,
					[styled['btnOrange1']]: btnOrange1,
					[styled['btnOrange2']]: btnOrange2,
					[styled['btnWhite1']]: btnWhite1,
					[styled['btnLink']]: link,
					[styled['btnCheck']]: check,
				})}
			>
				{link ? <NavLink to={link}>{children}</NavLink> : <>{children}</>}
			</button>
		</>
	);
};
