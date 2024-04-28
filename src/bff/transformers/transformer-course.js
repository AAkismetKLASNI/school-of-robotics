export const transformerCourse = (course) => ({
	id: course.id,
	price: course.price,
	forWhat: course.for_what,
	level: course.level,
	mode: course.mode,
	features: course.features,
});
