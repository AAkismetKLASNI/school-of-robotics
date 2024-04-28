import { H, Button } from '../../../../ui-components';
import { CourseCardLayout } from './components/CourseCardLayout';
import styled from './SectionFirst.module.css';

export const SectionFirstLayout = ({
	courses,
	onFilter,
	filterProgramming,
	filterRobotics,
}) => {
	return (
		<div className={styled.wrapper}>
			<div className={styled.filterOperation}>
				<H>Увлекательный опыт ждет вас</H>
				<div>
					<Button
						btnWhite1
						onClick={() => onFilter('робототехника', filterRobotics)}
					>
						робототехника
					</Button>
					<Button
						btnWhite1
						onClick={() => onFilter('программирование', filterProgramming)}
					>
						программирование
					</Button>
				</div>
			</div>
			<ul className={styled.coursesContainer}>
				{courses.map(({ id, ...props }) => {
					return <CourseCardLayout key={id} {...props} />;
				})}
			</ul>
		</div>
	);
};
