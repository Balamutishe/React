import { BrowserRouter, Routes, Route } from "react-router-dom";

import { BoardsListView } from "./components/List/BoardsListView";
import { NotesListView } from "./components/List/NotesListView";
import Button from "./components/Button/Button";
import "./index.scss";

export const App = () => {
  return (
    <BrowserRouter>
      <>
        <header className="header">
          <h1>TodoList</h1>
        </header>
        <main className="main">
          <div className="main__sidebar-left">
            <Button title="Добавить доску" />
            <BoardsListView />
          </div>
          <div className="main__sidebar-right">
            <Routes>
              <Route path="/" element={<div>Здесь пока нет записей</div>} />
              <Route path="/boards/:id" element={<NotesListView />} />
            </Routes>
          </div>
        </main>
        <footer className="footer"></footer>
      </>
    </BrowserRouter>
  );
};

export default App;
