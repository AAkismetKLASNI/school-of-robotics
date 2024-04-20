import cx from 'classnames';
import styled from './Button.module.css';

export const Button = ({ children, btnBlue1, btnBlue2 }) => {
	return (
		<button
			className={cx(styled.btn, {
				[styled['btnBlue1']]: btnBlue1,
				[styled['btnBlue2']]: btnBlue2,
			})}
		>
			{children}
		</button>
	);
};
