import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import { AuthPage } from "./pages/AuthPage/AuthPage";
import { NoteDescPage } from "./pages/NoteDescPage/NoteDescPage";

import store from "./store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/" element={<AuthPage />} />
            <Route path="/notes/:id" element={<NoteDescPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
