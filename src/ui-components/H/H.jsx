import cx from 'classnames';
import styled from './H.module.css';

export const H = ({ children, H2, H3, center = false }) => {
	return (
		<p
			className={cx(styled.H1, {
				[styled['H2']]: H2,
				[styled['H3']]: H3,
				[styled['HCenter']]: center,
			})}
		>
			{children}
		</p>
	);
};
