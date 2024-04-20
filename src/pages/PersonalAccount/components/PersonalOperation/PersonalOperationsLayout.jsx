import { Button } from '../../../../ui-components';
import styled from './PersonalOperations.module.css';

export const PersonalOperationsLayout = () => {
	return (
		<div className={styled.personalOperations}>
			<img
				src="https://i.postimg.cc/q7nfCJKq/avatar-user.png"
				border="0"
				alt="avatar-user"
			/>
			<Button btnOrange1>Сохранить</Button>
		</div>
	);
};
