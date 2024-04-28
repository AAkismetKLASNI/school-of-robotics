import { useSelector } from 'react-redux';
import { userSelector } from '../../../../selectors';
import styled from './PersonalInfo.module.css';
import { useState } from 'react';

export const PersonalInfoLayout = ({
	firstNameRef,
	lastNameRef,
	telephoneRef,
	passwordRef,
	emailRef,
	setPersonalGender,
	personalGender,
}) => {
	const [toggleToChangePassword, setToggleToChangePassword] = useState(false);
	const [toggleToChangeEmail, setToggleToChangeEmail] = useState(false);

	const user = useSelector(userSelector);

	const { firstname, lastname, password, telephone, email } = user;

	console.log(user);

	return (
		<div className={styled.personalInfo}>
			<div className={styled.personalField}>
				<span className={styled.personalNameField}>Имя</span>
				<input
					type="text"
					className={styled.openField}
					defaultValue={firstname}
					ref={firstNameRef}
				/>
			</div>
			<div className={styled.personalField}>
				<span className={styled.personalNameField}>Фамилия</span>
				<input
					type="text"
					className={styled.openField}
					defaultValue={lastname}
					ref={lastNameRef}
				/>
			</div>
			<div className={styled.personalField}>
				<span className={styled.personalNameField}>Телефон</span>
				<input
					type="text"
					className={styled.openField}
					defaultValue={telephone}
					ref={telephoneRef}
				/>
			</div>
			<div className={styled.personalField}>
				<span className={styled.personalNameField}>Пол</span>
				<div className={styled.toggleGender}>
					<div
						className={
							personalGender === 'men'
								? `${styled.menGender} ${styled.activeGender}`
								: styled.menGender
						}
						onClick={() => setPersonalGender('men')}
					>
						Мужской
					</div>
					<div
						className={
							personalGender === 'women'
								? `${styled.womenGender} ${styled.activeGender}`
								: styled.womenGender
						}
						onClick={() => setPersonalGender('women')}
					>
						Женский
					</div>
				</div>
			</div>
			<div className={styled.personalField}>
				<span className={styled.personalNameField}>Пароль</span>
				<input
					type="password"
					className={
						toggleToChangePassword ? styled.openField : styled.closeField
					}
					defaultValue={password}
					ref={passwordRef}
				/>
				<span
					className={styled.personalChangeData}
					onClick={() => setToggleToChangePassword(!toggleToChangePassword)}
				>
					{toggleToChangePassword ? 'закрыть' : 'открыть'}
				</span>
			</div>
			<div className={styled.personalField}>
				<span className={styled.personalNameField}>Email</span>
				<input
					type="email"
					className={toggleToChangeEmail ? styled.openField : styled.closeField}
					defaultValue={email}
					ref={emailRef}
				/>
				<span
					className={styled.personalChangeData}
					onClick={() => setToggleToChangeEmail(!toggleToChangeEmail)}
				>
					{toggleToChangeEmail ? 'закрыть' : 'открыть'}
				</span>
			</div>
		</div>
	);
};
