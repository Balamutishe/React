import { FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import {
		useMutateChatAdd,
		useMutateChatDelete,
		useQueryGetAllChats,
} from "../../hooks/api";
import { RootState } from "../../redux";
import { List } from "../List/List.tsx";
import { Loader } from "../Loader/Loader.tsx";
import { ChatForm } from "./ChatForm.tsx";
import c from "./Chats.module.css";


const mapStateToProps = (state: RootState) =>
	({ chats: state.chatsData.chats });

const mapDispatchToProps = () => ({
		chatAdd: useMutateChatAdd,
		chatDelete: useMutateChatDelete,
});

const connector = connect(mapStateToProps, mapDispatchToProps);

const FetchChats: FC<ConnectedProps<typeof connector>> = ({
		chats, chatAdd, chatDelete,
}) => {
		const queryChats = useQueryGetAllChats();
		
		switch (queryChats.status) {
				case "success":
						return (
							<div className={ c.chats }>
									<div className={ c.chatsContent }>
											<div className={ c.header }>
													<h2 className={ c.title }>Chats</h2>
											</div>
											<List list={ chats } itemDelete={ chatDelete }/>
									</div>
									<div className={ c.formContainer }>
											<ChatForm chatAdd={ chatAdd }/>
									</div>
							</div>
						);
				case "pending":
						return <Loader/>;
				case "error":
						return <div>
								Ошибка при получении данных
								<button onClick={ () => queryChats.refetch() }>Повторить
										запрос</button>
						</div>;
				
		}
};

export default connector(FetchChats);