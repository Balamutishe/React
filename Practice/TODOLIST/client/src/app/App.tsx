import { Header } from "@widgets/Header/Header";
import { Main } from "@widgets/Main/Main";
import "./App.css";
import { Navigation } from "@widgets/Navigation/Navigation";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import store from "@entities/redux/store";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@shared/api/queryClient";

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <div className="app-container">
            <Navigation />
            <Header />
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  );
};
