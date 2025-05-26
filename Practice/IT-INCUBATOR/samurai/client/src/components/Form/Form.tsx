import { ChangeEvent, FC, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { setFormText } from "../../redux/FormDataSlice.ts";

import c from "./Form.module.css";

type TFormProps = {
		variant: "chat" | "message" | "post";
		formText: string;
		addItemFunc: () => void;
}

export const Form: FC<TFormProps> = ({
		variant, formText, addItemFunc,
}) => {
		const dispatch = useDispatch();
		const formData = useSelector((state: RootState) => state.formData.formText);
		
		const handleFormTextChange = (e: ChangeEvent<HTMLInputElement>) => dispatch(
			setFormText({ ...formData, [e.target.name]: e.target.value }));
		
		
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