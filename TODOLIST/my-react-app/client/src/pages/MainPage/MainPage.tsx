import { FetchListView } from "../../components/List/FetchListView";

import "./MainPage.scss";

export const MainPage = () => {
  return (
    <div className="main-page">
      <h1 className="main-page__title">TODOLIST</h1>
      <FetchListView />
    </div>
  );
};
