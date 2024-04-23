import { useDispatch } from 'react-redux';
import { useRequestServer } from '../../../../utils';
import { logoutAsync } from '../../../../actions';
import { useNavigate } from 'react-router-dom';
import styled from './PersonalPanel.module.css';

export const PersonalPanelLayout = () => {
	const requestServer = useRequestServer();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onLogout = () => {
		dispatch(logoutAsync(requestServer, navigate));
	};

	return (
		<div className={styled.personalPanel}>
			<button className={styled.btnHelper}>Поддержка</button>
			<div>
				<span>Потоки</span>
				<span>Сообщения</span>
				<span>Покупки</span>
			</div>
			<button className={styled.btnLogout} onClick={onLogout}>
				Выйти
			</button>
		</div>
	);
};
