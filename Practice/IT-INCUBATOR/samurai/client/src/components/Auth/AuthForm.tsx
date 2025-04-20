import { ChangeEvent, FormEventHandler } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Input } from "../Input/Input.tsx";
import { RootState } from "../../redux";
import { setAuthState, setFormData } from "../../redux/AuthSlice.ts";
import { useMutateUserLogin, useMutateUserRegister } from "../../hooks/api";
import c from "./AuthForm.module.css";

export const AuthForm = () => {
		const dispatch = useDispatch();
		
		const { authState, formData } = useSelector(
			(state: RootState) => state.authData);
		const userRegister = useMutateUserRegister(formData);
		const userLogin = useMutateUserLogin(formData);
		
		const handleFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
				e.preventDefault();
				return authState === "login" ? userLogin.mutate() : userRegister.mutate();
		};
		const handleFormDataChange = (e: ChangeEvent<HTMLInputElement>) =>
			dispatch(setFormData({ ...formData, [e.target.name]: e.target.value }));
		const handleAuthStateChange = () => {
				return authState === "login" ? dispatch(setAuthState("register")) :
					dispatch(setAuthState("login"));
		};
		
		
		return (
			<div className={ c.formContainer }>
					<form className={ c.form } onSubmit={ handleFormSubmit }>
							<h2 className={ c.title }>
									{ authState === "register" ? "Регистрация" : "Войдите чтобы начать" }
							</h2>
							<div className={ c.inputs }>
									<Input
										variant={ c.inputAuth }
										type="text"
										name="username"
										placeholder="Введите имя"
										value={ formData.username }
										onChange={ handleFormDataChange }
									/>
									<Input
										variant={ c.inputAuth }
										type="password"
										name="password"
										placeholder="Введите пароль"
										value={ formData.password }
										onChange={ handleFormDataChange }
									/>
							</div>
							<button>
									{ authState === "login" ? "Войти" : "Зарегистрироваться" }
							</button>
					</form>
					<button
						onClick={ handleAuthStateChange }
					>
							{ authState === "login" ? "Еще нет аккаунта?" :
								"Уже зарегистрированы?" }
					</button>
			</div>
		
		);
};