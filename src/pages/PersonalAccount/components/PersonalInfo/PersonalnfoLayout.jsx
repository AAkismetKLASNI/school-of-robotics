import styled from './PersonalInfo.module.css';

export const PersonalInfoLayout = () => {
	return (
		<div className={styled.personalInfo}>
			<div className={styled.personalField}>
				<span className={styled.personalNameField}>Имя</span>
				<input type="text" className={styled.openField} />
			</div>
			<div className={styled.personalField}>
				<span className={styled.personalNameField}>Фамилия</span>
				<input type="text" className={styled.openField} />
			</div>
			<div className={styled.personalField}>
				<span className={styled.personalNameField}>Телефон</span>
				<input type="text" className={styled.openField} />
			</div>
			<div className={styled.personalField}>
				<span className={styled.personalNameField}>Пол</span>
				<div className={styled.toggleGender}>
					<div className={`${styled.manGender} ${styled.activeGender}`}>
						Мужской
					</div>
					<div className={styled.womanGender}>Женский</div>
				</div>
			</div>
			<div className={styled.personalField}>
				<span className={styled.personalNameField}>Пароль</span>
				<input type="password" className={styled.closeField} />
				<span className={styled.personalChangeData}>изменить</span>
			</div>
			<div className={styled.personalField}>
				<span className={styled.personalNameField}>Email</span>
				<input type="email" className={styled.closeField} />
				<span className={styled.personalChangeData}>изменить</span>
			</div>
		</div>
	);
};
