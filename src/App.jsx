import { HeaderLayout, MainLayout } from './layouts';
import styled from './App.module.css';

export const App = () => {
	return (
		<div className={styled.content}>
			<HeaderLayout />
			<MainLayout />
		</div>
	);
};
