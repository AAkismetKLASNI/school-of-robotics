import { PersonalAccountLayout } from './PersonalAccountLayout';
import { useRequestServer } from '../../utils';
import { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { userGenderSelector } from '../../selectors';
import { sessionSelector } from '../../selectors';

export const PersonalAccountContainer = () => {
	const genderUser = useSelector(userGenderSelector);

	const [personalGender, setPersonalGender] = useState('men');

	const requestServer = useRequestServer();

	const [errorLogging, setErrorLogging] = useState(null);
	const session = useSelector(sessionSelector);

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
	const passwordRef = useRef(null);
	const emailRef = useRef(null);

	const userInfo = {
		firstNameRef,
		lastNameRef,
		telephoneRef,
		passwordRef,
		emailRef,
		setPersonalGender,
		personalGender,
	};

	return errorLogging ? (
		<div>{errorLogging}</div>
	) : (
		<PersonalAccountLayout {...userInfo} />
	);
};
