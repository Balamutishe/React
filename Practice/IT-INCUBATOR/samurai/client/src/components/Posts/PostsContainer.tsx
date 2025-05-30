import { connect, ConnectedProps } from "react-redux";
import { useMutatePostAdd, useMutatePostDelete } from "../../hooks/api";
import { RootState } from "../../redux";
import { Posts } from "./Posts.tsx";


const mapStateToProps = (state: RootState) =>
	({
			posts: state.postsData.posts,
			postText: state.postsData.postText,
	});

const mapDispatchToProps = () => ({
		postAddMutate: useMutatePostAdd,
		postDeleteMutate: useMutatePostDelete,
});

const connector = connect(mapStateToProps, mapDispatchToProps);
export type TContainerPostsProps = ConnectedProps<typeof connector>

export default connector(Posts);