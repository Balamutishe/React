import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { getUserMe } from "../../../api/users/users.ts";
import { setAuthState, setProfile } from "../../../redux/ProfileSlice.ts";

export const useQueryMe = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  return useQuery(
    {
      queryFn: () =>
        getUserMe().then((data) => {
          dispatch(setProfile(data));
          dispatch(setAuthState(true));
          return data;
        }),
      queryKey: ["users", "me"],
      retry: false,
    },
    queryClient
  );
};
