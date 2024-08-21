import { z } from 'zod';
import { validateResponse } from './validateResponse';

export const PostShema = z.object({
  id: z.string(),
  text: z.string(),
  authorId: z.string(),
  createdAt: z.number(),
});

export type Post = z.infer<typeof PostShema>;

export const PostListShema = z.array(PostShema);

export type PostList = z.infer<typeof PostListShema>;

export const FetchPostListShema = z.object({
  list: PostListShema,
});

type FetchPostListResponse = z.infer<typeof FetchPostListShema>;

export function fetchPostList(): Promise<FetchPostListResponse> {
  return fetch(`/api/posts`)
    .then((response) => response.json())
    .then((data) => FetchPostListShema.parse(data));
}

export function createPost(text: string): Promise<void> {
  return fetch('/api/posts', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ text }),
  })
    .then(validateResponse)
    .then(() => undefined);
}

// interface IdleRequestState {
//   status: 'idle';
// }

// interface LoadingRequestState {
//   status: 'pending';
// }

// interface SuccessRequestState {
//   status: 'success';
//   data: PostList;
// }

// interface ErrorRequestState {
//   status: 'error';
//   error: unknown;
// }

// type RequestState =
//   | IdleRequestState
//   | LoadingRequestState
//   | SuccessRequestState
//   | ErrorRequestState;

// export function usePostList() {
//   const [state, setState] = useState<RequestState>({ status: 'idle' });

//   useEffect(() => {
//     if (state.status === 'pending') {
//       fetchPostList()
//         .then((data) => {
//           setState({ status: 'success', data: data.list });
//         })
//         .catch((error) => {
//           setState({ status: 'error', error });
//         });
//     }
//   }, [state]);

//   useEffect(() => {
//     setState({ status: 'pending' });
//   }, []);

//   const refetch = () => {
//     setState({ status: 'pending' });
//   };

//   return {
//     state,
//     refetch,
//   };
// }
