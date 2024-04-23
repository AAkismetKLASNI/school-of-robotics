import { H } from '../../../../ui-components';
import styled from './SectionFirst.module.css';

export const SectionFirstLayout = () => {
	return (
		<div className={styled.wrapper}>
			<div className={styled.leftPart}>
				<H H1>Откроем завесу в будущее</H>
				<p>
					Наша миссия в ближайшее время сделать из ваших детей востребованных
					специалистов
				</p>
			</div>
			<div className={styled.rigthPart}>
				<img
					src="https://i.postimg.cc/d3X6cyjd/father-son-making-robot-1.png"
					border="0"
					alt="father-son-making-robot-1"
				/>
				<div className={styled.rigthPartContent}>
					<div className={styled.rigthPartItem}>
						<div className={styled.rigthPartItemContent}>
							<span>+95%</span>
							<img
								src="https://i.postimg.cc/SRs4twgR/Vector.png"
								border="0"
								alt="Vector"
							/>
						</div>
						<span>пользователей остались довольны</span>
					</div>
					<div className={styled.rigthPartItem}>
						<div className={styled.rigthPartItemContent}>
							<span>+5500</span>
							<img
								src="https://i.postimg.cc/rFDcG2dY/Vector-1.png"
								border="0"
								alt="Vector-1"
							/>
						</div>
						<span>окончивших наши курсы</span>
					</div>
				</div>
			</div>
		</div>
	);
};
