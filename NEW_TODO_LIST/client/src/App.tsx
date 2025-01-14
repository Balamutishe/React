import { Provider } from "react-redux";

import { AuthPage } from "./pages/AuthPage/AuthPage";
import store from "./store";

import "./App.css";

function App() {
  return (
    <>
      <Provider store={store}>
        <header></header>
        <main className="app">
          <AuthPage />
        </main>
      </Provider>
    </>
  );
}

export default App;
