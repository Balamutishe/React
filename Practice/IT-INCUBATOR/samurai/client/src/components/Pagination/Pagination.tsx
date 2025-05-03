import { FC } from "react";
import { useDispatch } from "react-redux";

import { setActiveMessagePage } from "../../redux/DialogsSlice.ts";
import { setUsersPage } from "../../redux/UsersSlice.ts";
import c from "./Pagination.module.css";

type TPaginationProps = {
		pageCount: number,
		variant: "messages" | "posts" | "users" | "chats"
}

export const Pagination: FC<TPaginationProps> = ({ pageCount, variant }) => {
		const dispatch = useDispatch();
		
		const setPaginationCount = (pageCount: number) => {
				const arrPage = [];
				for (let i = 1; i <= pageCount; i++) {
						arrPage.push(i);
				}
				return arrPage;
		};
		
		const togglePage = (pageNumber: number) => {
				switch (variant) {
						case "messages":
								return dispatch(setActiveMessagePage(pageNumber));
						case "users":
								return dispatch(setUsersPage(pageNumber));
				}
		};
		
		return <div className={ c.paginationContainer }>
				{ pageCount !== 1 && setPaginationCount(
					pageCount).map((pageNumber) => (
					<button
						key={ crypto.randomUUID() } onClick={ () => togglePage(pageNumber) }
					>{ pageNumber }</button>
				)) }
		</div>;
};