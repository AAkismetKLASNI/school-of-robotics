import { useSelector } from 'react-redux';
import { userSelector } from '../../../../selectors';
import styled from './PersonalInfo.module.css';

export const PersonalInfoLayout = ({
	firstNameRef,
	lastNameRef,
	telephoneRef,
	genderRef,
	passwordRef,
	emailRef,
}) => {
	const user = useSelector(userSelector);

	const { firstname, lastname, password, telephone, gender, email } = user;

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
				{gender === 'men' ? (
					<div className={styled.toggleGender}>
						<div className={`${styled.manGender} ${styled.activeGender}`}>
							Мужской
						</div>
						<div className={styled.womanGender}>Женский</div>
					</div>
				) : (
					<div className={styled.toggleGender}>
						<div className={styled.manGender}>Мужской</div>
						<div className={`${styled.womanGender} ${styled.activeGender}`}>
							Женский
						</div>
					</div>
				)}
			</div>
			<div className={styled.personalField}>
				<span className={styled.personalNameField}>Пароль</span>
				<input
					type="password"
					className={styled.closeField}
					defaultValue={password}
					ref={passwordRef}
				/>
				<span className={styled.personalChangeData}>изменить</span>
			</div>
			<div className={styled.personalField}>
				<span className={styled.personalNameField}>Email</span>
				<input
					type="email"
					className={styled.closeField}
					defaultValue={email}
					ref={emailRef}
				/>
				<span className={styled.personalChangeData}>изменить</span>
			</div>
		</div>
	);
};
