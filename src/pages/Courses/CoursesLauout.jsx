import { SectionFirstContainer, SectionSecondContainer } from './components';
import styled from './Courses.module.css';

export const CoursesLayout = () => {
	return (
		<div className={styled.wrapper}>
			<SectionFirstContainer />
			<SectionSecondContainer />
		</div>
	);
};
