import { connect, ConnectedProps } from "react-redux";
import { AppDispatch, RootState } from "../../redux";
import { setPostText } from "../../redux/PostsSlice.ts";
import { Posts } from "./Posts.tsx";


const mapStateToProps = (state: RootState) =>
	({
			posts: state.postsData.posts,
			postText: state.postsData.postText,
	});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
		setPostText: (text: string) => dispatch(setPostText(text)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
export type TContainerPostsProps = ConnectedProps<typeof connector>

export default connector(Posts);