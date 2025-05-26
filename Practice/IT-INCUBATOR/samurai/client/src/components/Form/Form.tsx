import { ChangeEvent, FC, FormEvent } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";

import c from "./Form.module.css";

type TFormProps = {
		variant: "chat" | "message" | "post";
		formText: string;
		addItemFunc: () => void;
		setFormText: (formData: {
				postText: string
				messageText: string
				chatText: string
		}, nameField: string, text: string) => any
}

export const Form: FC<TFormProps> = ({
		variant, formText, addItemFunc, setFormText,
}) => {
		const formData = useSelector((state: RootState) => state.formData.formText);
		
		const handleFormTextChange = (e: ChangeEvent<HTMLInputElement>) => setFormText(
			formData, e.target.name, e.target.value);
		
		const handleItemAdd = (e: FormEvent<HTMLFormElement>) => {
				e.preventDefault();
				addItemFunc();
		};
		
		return (
			<form className={ c.form } onSubmit={ handleItemAdd }>
					<input
						className={ c.input }
						name={ `${ variant }Text` } placeholder={ `Add new ${ variant }` }
						type={ "text" }
						value={ formText }
						onChange={ handleFormTextChange }
					/>
					<button className={ c.button }>+</button>
			</form>
		);
};