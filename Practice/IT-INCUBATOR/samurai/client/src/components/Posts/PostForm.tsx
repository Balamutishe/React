import { zodResolver } from "@hookform/resolvers/zod";
import { UseMutationResult } from "@tanstack/react-query";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { TPost } from "../../api/posts/types.ts";
import c from "./Posts.module.css";

type TPostFormProps = {
		postAdd: () => UseMutationResult<TPost, Error, string, unknown>;
}

const FormPostCreateSchema = z.object({
		postText: z.string()
		.min(5, "Длинна чата должна быть не менее 5 символов"),
		chatText: z.string(),
});

export const PostForm: FC<TPostFormProps> = ({
		postAdd,
}) => {
		const { register, handleSubmit, formState: { errors } } = useForm({
				resolver: zodResolver(FormPostCreateSchema),
		});
		
		const { mutate, isPending } = postAdd();
		
		return (<>
					{ errors.postText?.message && <div
						style={ { color: "red" } }
					>Errors: { errors.postText.message }</div> }
					<form
						className={ c.form }
						onSubmit={ handleSubmit(({ postText }) => {
								mutate(postText);
						}) }
					>
							<input
								className={ c.input }
								placeholder={ "Введите текст поста" }
								{ ...register("postText") }
							/>
							<button className={ c.button } disabled={ isPending }>
									+
							</button>
					</form>
			</>
		
		);
};