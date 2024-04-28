import { getCourses } from '../api/get-courses';

export const fetchCourses = async () => {
	const courses = await getCourses();

	return {
		error: null,
		res: courses,
	};
};
