import {
	PersonalOperationsLayout,
	PersonalInfoLayout,
	PersonalPanelLayout,
} from './components';
import styled from './PersonalAccount.module.css';

export const PersonalAccountLayout = () => {
	return (
		<div className={styled.wrapper}>
			<PersonalOperationsLayout />
			<PersonalInfoLayout />
			<PersonalPanelLayout />
		</div>
	);
};
