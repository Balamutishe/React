import { connect, ConnectedProps } from "react-redux";
import { AppDispatch, RootState } from "../../redux";
import { setMessageText } from "../../redux/MessagesSlice.ts";
import { Messages } from "./Messages.tsx";

const mapStateToProps = (state: RootState) => ({
		messagesData: state.messagesData.messages,
		messageText: state.messagesData.messageText,
		activeChatId: state.chatsData.activeChatId,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
		setMessageText: (text: string) => dispatch(setMessageText(text)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
export type TMessagesProps = ConnectedProps<typeof connector>

export default connector(Messages);