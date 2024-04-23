import { SectionFirstLayout, CarouselLayout } from './components';
import styled from './AboutUs.module.css';

export const AboutUsLayout = () => {
	return (
		<div className={styled.wrapper}>
			<SectionFirstLayout />
			<CarouselLayout>
				<div className={`${styled.item} ${styled.item1}`}>
					<img
						className={styled.carouselPhoto}
						src="https://i.postimg.cc/XJ0FjjTZ/father-sons-making-robot-1.png"
						border="0"
						alt="father-sons-making-robot-1"
					/>
					<div className={styled.carouselContent}>
						<img
							className={styled.arrow}
							src="https://i.postimg.cc/XNLxmn3Q/Group-62.png"
							border="0"
							alt="Group-62"
							// onClick={handleLeftArrowClick}
						/>
						<img
							className={styled.arrow}
							src="https://i.postimg.cc/V6Vv0SnK/Group-16.png"
							border="0"
							alt="Group-16"
							// onClick={handleRigthArrowClick}
						/>
					</div>
				</div>
				<div className={`${styled.item} ${styled.item2}`}>Item 2</div>
			</CarouselLayout>
		</div>
	);
};
