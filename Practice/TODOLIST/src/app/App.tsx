import { Header } from "@widgets/Header/Header";
import { Main } from "@widgets/Main/Main";
import "./App.css";
import { Navigation } from "@widgets/Navigation/Navigation";

export const App = () => {
  return (
    <div className="app-container">
      <Navigation />
      <Header />
      <Main />
    </div>
  );
};
