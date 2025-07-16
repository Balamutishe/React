import { fetchRefresh } from "../fetch";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useAppDispatch } from "@app/redux/store";
import { setToken, setUser } from "@features/Auth/slices";

export const useQueryRefresh = () => {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

  return useQuery(
    {
      queryFn: async () =>
        await fetchRefresh().then(({ token, data }) => {
          dispatch(setUser(data.user));
          dispatch(setToken(token));

          return data;
        }),
      queryKey: ["refresh"],
      retry: 1,
    },
    queryClient
  );
};
