import cx from 'classnames';
import styled from './H.module.css';

export const H = ({ children, H1, H2, H3 }) => {
	return (
		<p
			className={cx(styled.H1, {
				[styled['H1']]: H1,
				[styled['H2']]: H2,
				[styled['H3']]: H3,
			})}
		>
			{children}
		</p>
	);
};
