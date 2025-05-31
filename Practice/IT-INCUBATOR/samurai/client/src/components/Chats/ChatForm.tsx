import { zodResolver } from "@hookform/resolvers/zod";
import { UseMutationResult } from "@tanstack/react-query";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { TChat } from "../../api/chats/types.ts";
import c from "./Chats.module.css";

type TChatFormProps = {
		chatAdd: () => UseMutationResult<TChat, Error, string, unknown>;
}

const FormChatCreateSchema = z.object({
		chatText: z.string()
		.min(10, "Длинна поста должна быть не менее 5 символов"),
});

export const ChatForm: FC<TChatFormProps> = ({
		chatAdd,
}) => {
		const { register, handleSubmit, formState: { errors } } = useForm({
				resolver: zodResolver(FormChatCreateSchema),
		});
		
		const { mutate, isPending } = chatAdd();
		
		return (<>
					{ errors.chatText?.message && <div
						style={ { color: "red" } }
					>Errors: { errors.chatText.message }</div> }
					<form
						className={ c.form } onSubmit={ handleSubmit(({ chatText }) => {
							mutate(chatText);
					}) }
					>
							<input
								className={ c.input }
								placeholder={ "Введите текст поста" }
								{ ...register("chatText") }
							/>
							<button className={ c.button } disabled={ isPending }>
									+
							</button>
					</form>
			</>
		
		);
};