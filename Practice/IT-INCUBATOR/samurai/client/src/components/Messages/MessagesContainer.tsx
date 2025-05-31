import { FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useParams } from "react-router";
import {
		useMutateMessageAdd,
		useMutateMessageDelete,
		useQueryGetAllMessages,
} from "../../hooks/api";
import { RootState } from "../../redux";
import { List } from "../List/List.tsx";
import { Loader } from "../Loader/Loader.tsx";
import { Pagination } from "../Pagination/Pagination.tsx";
import { MessageForm } from "./MessageForm.tsx";
import c from "./Messages.module.css";

const mapStateToProps = (state: RootState) => ({
		messagesData: state.messagesData.messages,
});

const mapDispatchToProps = () => ({
		messageAdd: useMutateMessageAdd,
		messageDelete: useMutateMessageDelete,
});

const connector = connect(mapStateToProps, mapDispatchToProps);

const FetchMessages: FC<ConnectedProps<typeof connector>> = ({
		messagesData, messageAdd, messageDelete,
}) => {
		const { chatId, page } = useParams();
		const queryMessages = useQueryGetAllMessages(chatId, page || "1");
		
		switch (queryMessages.status) {
				case "success":
						return <div className={ c.messages }>
								<div>
										<div className={ c.header }>
												<h2 className={ c.title }>Messages</h2>
												<Pagination
													pageCount={ messagesData.pageCount }
													variant={ "messages" }
												/>
										</div>
										<List
											list={ messagesData.messagesList }
											itemDelete={ messageDelete }
										/>
								</div>
								<MessageForm messageAdd={ messageAdd } chatId={ chatId }/>
						</div>;
				case "pending":
						return <Loader/>;
				case "error":
						return <div>
								Ошибка при получении данных
								<button onClick={ () => queryMessages.refetch() }>
										Повторить запрос
								</button>
						</div>;
		}
};


export default connector(FetchMessages);