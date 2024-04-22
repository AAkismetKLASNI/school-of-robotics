import { PersonalAccountLayout } from './PersonalAccountLayout';
import { useRequestServer } from '../../utils';
import { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { sessionSelector } from '../../selectors';

export const PersonalAccountContainer = () => {
	const requestServer = useRequestServer();

	const [errorLogging, setErrorLogging] = useState(null);
	const session = useSelector(sessionSelector);

	console.log(session);

	useEffect(() => {
		requestServer('checkingLogging').then(({ error }) => {
			if (error) {
				setErrorLogging(error);
				return;
			}

			setErrorLogging(null);
		});
	}, [session]);

	const firstNameRef = useRef(null);
	const lastNameRef = useRef(null);
	const telephoneRef = useRef(null);
	const genderRef = useRef(null);
	const passwordRef = useRef(null);
	const emailRef = useRef(null);

	const userInfo = {
		firstNameRef,
		lastNameRef,
		telephoneRef,
		genderRef,
		passwordRef,
		emailRef,
	};

	return errorLogging ? (
		<div>{errorLogging}</div>
	) : (
		<PersonalAccountLayout {...userInfo} />
	);
};
