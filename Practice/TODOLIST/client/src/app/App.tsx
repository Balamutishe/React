import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { QueryClientProvider } from "@tanstack/react-query";

import { Header } from "@widgets/layout";
import { Main } from "@widgets/layout";
import { Navigation } from "@widgets/layout";
import store from "@app/redux/store";
import { queryClient } from "@shared/api/queryClient";

import "./App.css";

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
