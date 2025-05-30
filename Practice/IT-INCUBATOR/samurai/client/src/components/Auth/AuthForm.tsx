import { ChangeEvent, FormEventHandler, useState } from "react";
import { useMutateUserLogin, useMutateUserRegister } from "../../hooks/api";

import { Input } from "../Input/Input.tsx";
import c from "./AuthForm.module.css";

export const AuthForm = () => {
		const [formData, setFormData] = useState({ username: "", password: "" });
		const [authState, setAuthState] = useState("login");
		
		const userRegister = useMutateUserRegister(formData);
		const userLogin = useMutateUserLogin(formData);
		
		const handleFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
				e.preventDefault();
				return authState === "login" ? userLogin.mutate() :
					userRegister.mutate();
		};
		const handleFormDataChange = (e: ChangeEvent<HTMLInputElement>) =>
			setFormData(
				{ ...formData, [e.target.name]: e.target.value });
		
		const handleAuthStateChange = () => {
				setAuthState(
					(authState) => authState === "login" ? "register" : "login");
		};
		
		return (
			<div className={ c.formContainer }>
					<form className={ c.form } onSubmit={ handleFormSubmit }>
							<h2 className={ c.title }>
									{ authState === "register" ? "Регистрация" :
										"Войдите чтобы начать" }
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