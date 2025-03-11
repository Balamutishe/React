import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux";

import { BoardsContentView } from "./components/BoardsContentView/BoardsContentView";
import { NotesContentView } from "./components/NotesContentView/NotesContentView";
import "./index.scss";

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          <main className="main">
            <BoardsContentView />
            <Routes>
              <Route path="/" element={<div>Здесь пока нет записей</div>} />
              <Route path="/boards/:id" element={<NotesContentView />} />
            </Routes>
          </main>
        </>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
