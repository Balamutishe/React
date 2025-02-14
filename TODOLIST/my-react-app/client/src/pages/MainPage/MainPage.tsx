import { FetchListView } from "../../components/List/FetchListView";
import { AuthForm } from "../../components/AuthForm/AuthForm";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";

export const MainPage = () => {
  const userData = useSelector((state: RootState) => state.userData);

  switch (userData.authStatusUser) {
    case "error":
      return <AuthForm />;
    case "success":
      return <FetchListView />;
  }
};
