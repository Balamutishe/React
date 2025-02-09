import { FetchListView } from "../../components/List/FetchListView";
import { AuthForm } from "../../components/AuthForm/AuthForm";
import { useQueryUser } from "../../hooks/useQueryUser";

import "./MainPage.scss";

export const MainPage = () => {
  const queryUser = useQueryUser();

  switch (queryUser.status) {
    case "error":
      return (
        <div className="main-page">
          <AuthForm />
        </div>
      );
    case "success":
      return (
        <div className="main-page">
          <h1 className="main-page__title">TODOLIST</h1>
          <FetchListView />
        </div>
      );
  }
};
