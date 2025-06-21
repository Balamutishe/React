import { Header } from "@widgets/Header/Header";
import { Main } from "@widgets/Main/Main";
import "./App.css";
import { Navigation } from "@widgets/Navigation/Navigation";
import { BrowserRouter } from "react-router";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navigation />
        <Header />
        <Main />
      </div>
    </BrowserRouter>
  );
};
