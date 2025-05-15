import { FC } from "react";
import { Link, useParams } from "react-router";
import c from "./Pagination.module.css";

type TPaginationProps = {
		pageCount: number,
		variant: "messages" | "posts" | "users" | "chats"
}

export const Pagination: FC<TPaginationProps> = ({ pageCount, variant }) => {
		const activeChatId = useParams().chatId || "";
		
		const setPaginationCount = (pageCount: number) => {
				const arrPage = [];
				for (let i = 1; i <= pageCount; i++) {
						arrPage.push(i);
				}
				return arrPage;
		};
		
		const togglePath = (pageNumber: number) => {
				switch (variant) {
						case "messages":
								return `/dialogs/${ activeChatId }/${ pageNumber }`;
						case "users":
								return `/users/${ pageNumber }`;
						default:
								return "/";
				}
		};
		
		return <div className={ c.paginationContainer }>
				{ pageCount !== 1 && setPaginationCount(
					pageCount).map((pageNumber) => (
					<Link to={ togglePath(pageNumber) }>{ pageNumber }</Link>
				)) }
		</div>;
};