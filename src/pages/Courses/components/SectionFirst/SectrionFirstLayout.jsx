import { H, Button } from '../../../../ui-components';
import styled from './SectionFirst.module.css';

export const SectionFirstLayout = () => {
	return (
		<div className={styled.wrapper}>
			<div className={styled.filterOperation}>
				<H>Увлекательный опыт ждет вас</H>
				<div>
					<Button btnWhite1>робототехника</Button>
					<Button btnWhite1>программирование</Button>
				</div>
			</div>
		</div>
	);
};
