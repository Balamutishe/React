import { zodResolver } from "@hookform/resolvers/zod";
import { UseMutationResult } from "@tanstack/react-query";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { TMessage } from "../../api/messages/types.ts";
import c from "./Messages.module.css";

type TMessageFormProps = {
		chatId: string | undefined;
		messageAdd: () => UseMutationResult<TMessage, Error, {
				messageText: string,
				chatId: string | undefined,
		}, unknown>;
}

const FormMessageCreateSchema = z.object({
		messageText: z.string()
		.min(5, "Длинна сообщения должна быть не менее 5 символов"),
});

export const MessageForm: FC<TMessageFormProps> = ({
		chatId, messageAdd,
}) => {
		const { register, handleSubmit, formState: { errors } } = useForm({
				resolver: zodResolver(FormMessageCreateSchema),
		});
		
		const { mutate, isPending } = messageAdd();
		
		return (<>
					{ errors.messageText?.message && <div
						style={ { color: "red" } }
					>Errors: { errors.messageText.message }</div> }
					<form
						className={ c.form }
						onSubmit={ handleSubmit(({ messageText }) => {
								mutate({ messageText, chatId });
						}) }
					>
							<input
								className={ c.input }
								placeholder={ "Введите текст сообщения" }
								{ ...register("messageText") }
							/>
							<button className={ c.button } disabled={ isPending }>
									+
							</button>
					</form>
			</>
		
		);
};