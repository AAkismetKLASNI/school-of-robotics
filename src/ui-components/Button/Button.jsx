import cx from 'classnames';
import { NavLink } from 'react-router-dom';
import styled from './Button.module.css';

export const Button = ({
	children,
	link = false,
	to,
	check,
	btnBlue1,
	btnBlue2,
	btnOrange1,
	...props
}) => {
	return (
		<>
			{link ? (
				<button
					{...props}
					className={cx(styled.btnLink, {
						[styled['btnBlue1']]: btnBlue1,
						[styled['btnBlue2']]: btnBlue2,
						[styled['btnOrange1']]: btnOrange1,
					})}
				>
					<NavLink to={to}>{children}</NavLink>
				</button>
			) : (
				<button
					{...props}
					className={
						check
							? cx(styled.btnCheck, {
									[styled['btnBlue1']]: btnBlue1,
									[styled['btnBlue2']]: btnBlue2,
									[styled['btnOrange1']]: btnOrange1,
								})
							: cx(styled.btn, {
									[styled['btnBlue1']]: btnBlue1,
									[styled['btnBlue2']]: btnBlue2,
									[styled['btnOrange1']]: btnOrange1,
								})
					}
				>
					{children}
				</button>
			)}
		</>
	);
};
