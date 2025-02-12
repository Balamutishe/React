import { FetchListView } from "../../components/List/FetchListView";
import { AuthForm } from "../../components/AuthForm/AuthForm";
import { useQueryUser } from "../../hooks/useQueryUser";

export const MainPage = () => {
  const queryUser = useQueryUser();

  switch (queryUser.status) {
    case "error":
      return <AuthForm />;
    case "success":
      return <FetchListView />;
  }
};
