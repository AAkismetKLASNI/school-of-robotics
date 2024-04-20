import styled from './PersonalPanel.module.css';

export const PersonalPanelLayout = () => {
	return (
		<div className={styled.personalPanel}>
			<div>
				<span>Потоки</span>
				<span>Сообщения</span>
				<span>Покупки</span>
			</div>
			<button>Поддержка</button>
		</div>
	);
};
