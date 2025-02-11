import { FetchListView } from "../../components/List/FetchListView";
import { AuthForm } from "../../components/AuthForm/AuthForm";
import { useQueryUser } from "../../hooks/useQueryUser";
import { Header } from "../../components/Header/Header";

import "./MainPage.scss";

export const MainPage = () => {
  const queryUser = useQueryUser();

  switch (queryUser.status) {
    case "error":
      return (
        <div className="main-page">
          <main className="main">
            <AuthForm />
          </main>
        </div>
      );
    case "success":
      return (
        <div className="main-page">
          <Header username={queryUser.data.username} authState={true} />
          <main>
            <FetchListView />
          </main>
        </div>
      );
  }
};
