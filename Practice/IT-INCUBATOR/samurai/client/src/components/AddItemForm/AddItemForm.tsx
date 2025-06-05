import { zodResolver } from "@hookform/resolvers/zod";
import { UseMutationResult } from "@tanstack/react-query";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { z } from "zod";
import { TChat } from "../../api/chats/types.ts";
import { TMessage } from "../../api/messages/types.ts";
import { TPost } from "../../api/posts/types.ts";
import c from "./AddItemForm.module.css";

type TAddItemFormProps = {
		createItem: UseMutationResult<TChat | TPost | TMessage, Error, {
				formText: string
				chatId?: string
		}, unknown>;
		inputPlaceholder?: string;
}

const AddItemFormSchema = z.object({
		formText: z.string()
		.min(5, "Введите не менее 5 символов"),
});

const AddItemForm: FC<TAddItemFormProps> = ({
		createItem, inputPlaceholder,
}) => {
		const {
				register, handleSubmit, formState: { errors }, resetField,
		} = useForm({ resolver: zodResolver(AddItemFormSchema) });
		
		const { chatId } = useParams();
		
		return (<>
					{ errors.formText?.message && <span
						className={ c.formErrors }
					>{ errors.formText.message }</span> }
					<form
						className={ c.form } onSubmit={ handleSubmit(({ formText }) => {
							if (chatId) {
									createItem.mutate({ formText, chatId });
							} else {
									createItem.mutate({ formText });
							}
							
							resetField("formText");
					}) }
					>
							<input
								className={ c.input }
								placeholder={ inputPlaceholder }
								{ ...register("formText") }
							/>
							<button className={ c.button }>
									+
							</button>
					</form>
			</>
		);
};

export default AddItemForm;