import { useQuery } from "@tanstack/react-query";
import { fetchUserMe } from "../../api/User";
import { queryClient } from "../../api/queryClient";

import { FormView } from "../../components/Form/FormView";
import { Menu } from "../../components/Menu/Menu";
import { Button } from "../../components/Button/Button";
import { NoteList } from "../../components/NoteList/NoteList";

import "./AuthPage.css";

export const AuthPage = () => {
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
          <FormView />
        </div>
      );
    case "success":
      return (
        <>
          <Menu />
          <div className="container-button-add">
            <Button
              variant="button-default button-add"
              title="Добавить задачу
              "
            />
          </div>
          <NoteList />
        </>
      );
  }
};
