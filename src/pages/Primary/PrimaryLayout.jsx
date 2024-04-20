import { H, Button } from '../../ui-components';
import styled from './Primary.module.css';

export const PrimaryLayout = () => {
	return (
		<div>
			<div className={styled.content}>
				<H>
					«Я - Академик» <span style={{ color: '#39CADF' }}>путь с 0 до 1</span>
				</H>
				<p>Школа программирования и робототехники для детей и подростков</p>
				<Button btnBlue2>ПОПРОБОВАТЬ БЕСПЛАТНО</Button>
				<div></div>
			</div>
		</div>
	);
};
