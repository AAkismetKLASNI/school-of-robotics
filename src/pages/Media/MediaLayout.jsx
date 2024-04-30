import { H } from '../../ui-components';
import { MainVideoContainer, PostsContainer } from './components';
import styled from './Media.module.css';

export const MediaLayout = () => {
	return (
		<div className={styled.wrapper}>
			<H>Учись вместе с нами</H>
			<MainVideoContainer />
			<PostsContainer />
		</div>
	);
};
