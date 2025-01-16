import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import { FormView } from "../../components/Form/FormView";
import { Menu } from "../../components/Menu/Menu";
import { NoteList } from "../../components/NoteList/NoteList";
import { queryClient } from "../../api/queryClient";
import { fetchUserMe } from "../../api/User";
import { setUserData } from "../../store/userInfo";

export const MainPage = () => {
  const dispatch = useDispatch();

  const queryMe = useQuery(
    {
      queryFn: () => fetchUserMe(),
      queryKey: ["users", "me"],
      retry: false,
    },
    queryClient
  );

  switch (queryMe.status) {
    case "error":
      return <FormView />;
    case "success":
      dispatch(
        setUserData({
          username: queryMe.data.username,
        })
      );

      return (
        <>
          <Menu />
          <div>
            <FormView />
            <NoteList />
          </div>
        </>
      );
  }
};
