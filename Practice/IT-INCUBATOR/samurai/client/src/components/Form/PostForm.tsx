import { zodResolver } from "@hookform/resolvers/zod";
import { UseMutationResult } from "@tanstack/react-query";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { TPost } from "../../api/posts/types.ts";
import c from "./Form.module.css";

type TPostFormProps = {
		postAddMutate: () => UseMutationResult<TPost, Error, string, unknown>;
}

const FormPostCreateSchema = z.object({
		postText: z.string()
		.min(10, "Длинна поста должна быть не менее 10 символов"),
});

export const PostForm: FC<TPostFormProps> = ({
		postAddMutate,
}) => {
		const { register, handleSubmit, formState: { errors } } = useForm({
				resolver: zodResolver(FormPostCreateSchema),
		});
		
		const { mutate } = postAddMutate();
		
		return (<>
					{ errors.postText?.message && <div
						style={ { color: "red" } }
					>Errors: { errors.postText.message }</div> }
					<form
						className={ c.form } onSubmit={ handleSubmit(({ postText }) => {
							mutate(postText);
					}) }
					>
							<input
								className={ c.input }
								placeholder={ "Введите текст поста" }
								{ ...register("postText") }
							/>
							<button className={ c.button }>
									+
							</button>
					</form>
			</>
		
		);
};