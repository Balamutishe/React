import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { BoardsListView } from "./components/List/BoardsListView";
import { NotesListView } from "./components/List/NotesListView";
import store from "./redux";

import "./index.scss";

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          <main className="main">
            <div className="folders">
              <BoardsListView />
            </div>
            <Routes>
              <Route path="/" element={<div>Здесь пока нет записей</div>} />
              <Route path="/boards/:id" element={<NotesListView />} />
            </Routes>
          </main>
        </>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
