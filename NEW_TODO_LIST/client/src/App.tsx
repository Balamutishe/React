import { Provider } from "react-redux";

import { AuthPage } from "./pages/AuthPage/AuthPage";
import store from "./store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <AuthPage />
      </div>
    </Provider>
  );
}

export default App;
