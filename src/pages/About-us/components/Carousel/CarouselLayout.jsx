import { Children, cloneElement, useEffect, useState } from 'react';
import styled from './Carousel.module.css';

const PAGE_WIDTH = 1440;

export const CarouselLayout = ({ children }) => {
	const [pages, setPages] = useState([]);
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		setPages(
			Children.map(children, (chield) => {
				return cloneElement(chield, {
					style: {
						height: '100%',
						minWidth: `${PAGE_WIDTH}px`,
						maxWidth: `${PAGE_WIDTH}px`,
					},
				});
			}),
		);
	}, []);

	const handleLeftArrowClick = () => {
		setOffset((currentOffset) => {
			const newOffset = currentOffset + PAGE_WIDTH;

			return Math.min(newOffset, 0);
		});
	};

	const handleRigthArrowClick = () => {
		setOffset((currentOffset) => {
			const newOffset = currentOffset - PAGE_WIDTH;

			const maxOffsetPages = -(PAGE_WIDTH * (pages.length - 1));

			return Math.max(newOffset, maxOffsetPages);
		});
	};

	return (
		<div className={styled.mainContainer}>
			<div className={styled.window}>
				<div
					className={styled.allPagesContainer}
					style={{ transform: `translateX(${offset}px)` }}
				>
					{pages}
				</div>
			</div>
		</div>
	);
};
