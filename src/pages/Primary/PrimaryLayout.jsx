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
				<div>
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
			</div>
		</div>
	);
};
