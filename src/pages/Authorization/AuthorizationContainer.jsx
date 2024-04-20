import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { AuthorizationLayout } from './AuthorizationLayout';
import { server } from '../../bff/server';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../actions';

const authorizationSceme = yup.object().shape({
	email: yup
		.string()
		.matches(
			/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
			'Недопустимые символы в email',
		)
		.min('3', 'Минимум 3 символа для email')
		.required('Введите email'),
	password: yup
		.string()
		.min('6', 'Минимум 6 символов для пароля')
		.max('25', 'Максимум 25 символов для пароля')
		.required('Введите пароль'),
});

export const AuthorizationContainer = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: { email: '', password: '' },
		resolver: yupResolver(authorizationSceme),
	});

	const user = useSelector(({ user }) => user);

	console.log(user);

	const dispatch = useDispatch();
	const [serverError, setServerError] = useState(null);

	const formError = errors?.email?.message || errors?.password?.message;

	const error = formError || serverError;

	const onSubmit = ({ email, password }) => {
		server.authorize(email, password).then(({ error, res }) => {
			setServerError(error);
			if (error) {
				return;
			}

			dispatch(setUser(res));
		});
	};

	return (
		<AuthorizationLayout
			register={register}
			handleSubmit={handleSubmit}
			formError={formError}
			error={error}
			onSubmit={onSubmit}
		/>
	);
};
