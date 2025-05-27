import { connect, ConnectedProps } from "react-redux";
import { AppDispatch, RootState } from "../../redux";
import { setChatText } from "../../redux/ChatsSlice.ts";
import { Chats } from "./Chats.tsx";


const mapStateToProps = (state: RootState) =>
	({
			chats: state.chatsData.chats,
			chatText: state.chatsData.chatText,
	});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
		setChatText: (text: string) => dispatch(setChatText(text)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
export type TChatsProps = ConnectedProps<typeof connector>

export default connector(Chats);