import { UseMutationResult } from "@tanstack/react-query";
import { ChangeEvent, FC, FormEvent } from "react";
import { TChat } from "../../api/chats/types.ts";
import { TMessage } from "../../api/messages/types.ts";
import { TPost } from "../../api/posts/types.ts";

import c from "./Form.module.css";

type TFormProps = {
		variant: "chat" | "message" | "post";
		formText: string;
		addItemFunc: UseMutationResult<TPost | TChat | TMessage, Error, void, unknown>;
		setFormText: (text: string) => void;
}

export const Form: FC<TFormProps> = ({
		variant, formText, addItemFunc, setFormText,
}) => {
		const handleFormTextChange =
			(e: ChangeEvent<HTMLInputElement>) => setFormText(e.target.value);
		
		const handleItemAdd = (e: FormEvent<HTMLFormElement>) => {
				e.preventDefault();
				addItemFunc.mutate();
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
					<button
						className={ c.button } disabled={ addItemFunc.isPending }
					>+
					</button>
			</form>
		);
};