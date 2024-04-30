import styled from './Posts.module.css';

export const PostsLayout = () => {
	return (
		<div className={styled.postContainer}>
			<div className={styled.postItem}>
				<div className={styled.postItemContent}>
					<img
						className={styled.postItemImg}
						src="https://i.postimg.cc/fbXpr1XM/image-5.png"
						border="0"
						alt="image-5"
					/>
					<p className={styled.postItemTitle}>
						Более 100-и семей провели опрос и узнали...
					</p>
				</div>
				<div className={styled.postPanel}>
					<img
						src="https://i.postimg.cc/QCPFVBMg/free-icon-font-heart.png"
						border="0"
						alt="free-icon-font-heart"
					/>
					<span>21.05.2024</span>
				</div>
			</div>
			<div className={styled.postItem}>
				<div className={styled.postItemContent}>
					<img
						className={styled.postItemImg}
						src="https://i.postimg.cc/k4gNbb7L/image-1.png"
						border="0"
						alt="image-1"
					/>

					<p className={styled.postItemTitle}>
						Будущее вашего ребенка прямиком в ваших руках
					</p>
				</div>
				<div className={styled.postPanel}>
					<img
						src="https://i.postimg.cc/QCPFVBMg/free-icon-font-heart.png"
						border="0"
						alt="free-icon-font-heart"
					/>
					<span>19.05.2024</span>
				</div>
			</div>
			<div className={styled.postItem}>
				<div className={styled.postItemContent}>
					<img
						className={styled.postItemImg}
						src="https://i.postimg.cc/JzCbQg1N/image-4.png"
						border="0"
						alt="image-4"
					/>
					<p className={styled.postItemTitle}>
						Техника, которая изменит вашу жизнь уже здесь!
					</p>
				</div>
				<div className={styled.postPanel}>
					<img
						src="https://i.postimg.cc/QCPFVBMg/free-icon-font-heart.png"
						border="0"
						alt="free-icon-font-heart"
					/>
					<span>20.05.2024</span>
				</div>
			</div>
		</div>
	);
};
