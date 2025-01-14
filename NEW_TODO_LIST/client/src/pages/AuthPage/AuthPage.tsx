import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import { FormView } from "../../components/Form/FormView";
import { Menu } from "../../components/Menu/Menu";
import { NoteList } from "../../components/NoteList/NoteList";
import { queryClient } from "../../api/queryClient";
import { fetchUserMe } from "../../api/User";
import { setUserData } from "../../store/userInfo";
import { toggleFormType } from "../../store/switchFormType";

import "./AuthPage.css";

export const AuthPage = () => {
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
      return (
        <div className="page-auth">
          <div className="overlay">
            <FormView />
          </div>
        </div>
      );
    case "success":
      dispatch(
        setUserData({
          username: queryMe.data.username,
        })
      );

      dispatch(toggleFormType("createNote"));

      return (
        <>
          <Menu />
          <div className="overlay overlay-notes">
            <FormView />
          </div>
          <NoteList />
        </>
      );
  }
};
