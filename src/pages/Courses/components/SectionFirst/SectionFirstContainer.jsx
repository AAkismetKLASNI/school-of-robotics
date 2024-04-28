import { useEffect, useState } from 'react';
import { useRequestServer } from '../../../../utils';
import { SectionFirstLayout } from './SectrionFirstLayout';

export const SectionFirstContainer = () => {
	const [courses, setCourses] = useState([]);
	const [filterRobotics, setFilterRobotics] = useState(false);
	const [filterProgramming, setFilterProgramming] = useState(false);

	const requestServer = useRequestServer();

	useEffect(() => {
		requestServer('fetchCourses').then(({ res }) => setCourses(res));
	}, []);

	const onFilter = (option, value) => {
		if (option === 'робототехника') {
			setFilterRobotics(!value);
		} else {
			setFilterProgramming(!value);
		}

		if (value) {
			return;
		}

		console.log('кнопка была отжата');
		console.log(option);
	};

	return (
		<SectionFirstLayout
			courses={courses}
			onFilter={onFilter}
			filterRobotics={filterRobotics}
			filterProgramming={filterProgramming}
		/>
	);
};
