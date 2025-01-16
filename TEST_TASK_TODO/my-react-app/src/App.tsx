import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import { MainPage } from "./pages/MainPage/MainPage";
import { NotePage } from "./pages/NotePage/NotePage";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/note/:id" element={<NotePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
