import { H, Button } from '../../ui-components';
import { NavLink } from 'react-router-dom';
import styled from './Authorization.module.css';

export const AuthorizationLayout = ({
	register,
	handleSubmit,
	formError,
	onSubmit,
	error,
}) => {
	return (
		<>
			<div className={styled.wrapper}>
				<H H1>Авторизация</H>
				<form
					className={styled.authorizationForm}
					onSubmit={handleSubmit(onSubmit)}
				>
					<input {...register('email')} type="text" placeholder="Email" />
					<input
						{...register('password')}
						type="password"
						placeholder="Пароль"
					/>
					<Button btnBlue2 disabled={formError} check={formError}>
						Авторизоваться
					</Button>
					<NavLink to="/registration">регистрация</NavLink>
					{error ? <p className={styled.errorForm}>{error}</p> : null}
				</form>
			</div>
		</>
	);
};
