import { BrowserRouter, Routes, Route } from "react-router-dom";

import { BoardsListView } from "./components/List/BoardsListView";
import { NotesListView } from "./components/List/NotesListView";

import "./index.scss";

export const App = () => {
  return (
    <BrowserRouter>
      <>
        <main className="main">
          <div className="main__sidebar-left">
            <BoardsListView />
          </div>
          <div className="main__sidebar-center">
            <Routes>
              <Route path="/" element={<div>Здесь пока нет записей</div>} />
              <Route path="/boards/:id" element={<NotesListView />} />
            </Routes>
          </div>
          <div className="main__sidebar-right"></div>
        </main>
      </>
    </BrowserRouter>
  );
};

export default App;
