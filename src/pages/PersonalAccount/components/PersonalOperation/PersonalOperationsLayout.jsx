import { Button } from '../../../../ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { useRequestServer } from '../../../../utils';
import { fetchChangeUserAsync } from '../../../../actions';
import { userIdSelector } from '../../../../selectors';
import styled from './PersonalOperations.module.css';

export const PersonalOperationsLayout = ({
	firstNameRef,
	lastNameRef,
	telephoneRef,
	passwordRef,
	emailRef,
}) => {
	const requestServer = useRequestServer();

	const userId = useSelector(userIdSelector);

	const dispatch = useDispatch();

	const sendDataUser = () => {
		const newDataUser = {
			firstName: firstNameRef.current.value,
			lastName: lastNameRef.current.value,
			telephone: telephoneRef.current.value,
			password: passwordRef.current.value,
			email: emailRef.current.value,
		};

		dispatch(fetchChangeUserAsync(requestServer, newDataUser, userId));
	};

	return (
		<div className={styled.personalOperations}>
			<img
				src="https://i.postimg.cc/q7nfCJKq/avatar-user.png"
				border="0"
				alt="avatar-user"
			/>
			<Button btnOrange1 onClick={sendDataUser}>
				Сохранить
			</Button>
		</div>
	);
};
