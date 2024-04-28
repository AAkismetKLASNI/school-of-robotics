import { H, Button } from '../../../../../ui-components';
import styled from './CourseCard.module.css';

export const CourseCardLayout = ({ level, mode, price, forWhat, features }) => {
	return (
		<div className={styled.wrapper}>
			<div className={styled.leftPart}>
				<span>{forWhat}</span>
				<div>
					<H>«{level}»</H>
					<div className={styled.mode}>{mode}</div>
				</div>
			</div>
			<div className={styled.rightPart}>
				<ul>
					{features.map((feature) => (
						<li>{feature}</li>
					))}
				</ul>
				<div>
					<span>{price} р/месяц</span>
					<Button btnOrange2>Попробовать</Button>
				</div>
			</div>
		</div>
	);
};
