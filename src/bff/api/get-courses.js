import { transformerCourse } from '../transformers';

export const getCourses = () =>
	fetch('http://localhost:3500/courses')
		.then((res) => res.json())
		.then(
			(loadedCourses) => loadedCourses && loadedCourses.map(transformerCourse),
		);
