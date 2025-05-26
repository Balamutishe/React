import { connect, ConnectedProps } from "react-redux";
import { AppDispatch, RootState } from "../../redux";
import { setFormText } from "../../redux/FormDataSlice.ts";
import { Posts } from "./Posts.tsx";

const mapStateToProps = (state: RootState) =>
	({
			posts: state.postsData.posts,
			postText: state.formData.formText.postText,
	});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
		setFormText: (formData: {
				postText: string
				messageText: string
				chatText: string
		}, nameField: string, text: string) => dispatch(
			setFormText(
				{ ...formData, [nameField]: text })),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
export type TContainerPostsProps = ConnectedProps<typeof connector>

export default connector(Posts);