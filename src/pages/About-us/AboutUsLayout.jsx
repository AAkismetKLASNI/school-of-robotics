import {
	SectionFirstLayout,
	CarouselContainer,
	SectionSecondLayout,
	SectionThirdLayout,
} from './components';
import { H, Button } from '../../ui-components';
import styled from './AboutUs.module.css';

export const AboutUsLayout = () => {
	return (
		<div className={styled.wrapper}>
			<SectionFirstLayout />
			<CarouselContainer>
				<div className={`${styled.item} ${styled.item1}`}>
					<img
						className={styled.carouselPhoto}
						src="https://i.postimg.cc/GmKsD96w/father-sons-making-robot-1.png"
						border="0"
						alt="father-sons-making-robot-1"
					/>
					<div className={styled.carouselContainer}>
						<div className={styled.carouselContentWrapper}>
							<div className={styled.carouselContent}>
								<H H2>СТАНЬ ЭКСПЕРТОМ В ОБЛАСТИ РОБОТОТЕХНИКИ</H>
								<span>для детей (7-14 лет)</span>
							</div>
							<Button link="/courses" btnOrange2>
								ПЕРЕЙТИ НА КУРС
							</Button>
						</div>
						<div className={styled.arrowContainer}></div>
					</div>
				</div>
				<div className={`${styled.item} ${styled.item1}`}>
					<img
						className={styled.carouselPhoto}
						src="https://i.postimg.cc/wMD1jBDr/students-working-study-group-1.png"
						border="0"
						alt="students-working-study-group-1"
					/>

					<div className={styled.carouselContainer}>
						<div className={styled.carouselContentWrapper}>
							<div className={styled.carouselContent}>
								<H H2>СТАНЬ ЭКСПЕРТОМ В ОБЛАСТИ ПРОГРАММИРОВАНИЯ</H>
								<span>для подростков (14-17 лет) </span>
							</div>
							<Button link="/courses" btnOrange2>
								ПЕРЕЙТИ НА КУРС
							</Button>
						</div>
						<div className={styled.arrowContainer}></div>
					</div>
				</div>
			</CarouselContainer>
			<SectionSecondLayout />
			<SectionThirdLayout />
		</div>
	);
};
