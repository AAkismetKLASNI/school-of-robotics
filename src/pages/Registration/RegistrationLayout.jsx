import { H, Button } from '../../ui-components';
import styled from './Registration.module.css';

export const RegistrationLayout = ({
	onSubmit,
	formError,
	error,
	register,
	handleSubmit,
}) => {
	return (
		<>
			<div className={styled.wrapper}>
				<H H1>Регистрация</H>
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
					<input
						{...register('passcheck')}
						type="password"
						placeholder="Пароль"
					/>
					<Button btnBlue2 disabled={formError} check={formError}>
						Зарегистрироваться
					</Button>
					{/* <NavLink to="/registration">регистрация</NavLink> */}
					{error ? <p className={styled.errorForm}>{error}</p> : null}
				</form>
			</div>
		</>
	);
};
