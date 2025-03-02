import { BrowserRouter, Routes, Route } from "react-router-dom";

import { BoardsListView } from "./components/List/BoardsListView";
import { NotesListView } from "./components/List/NotesListView";
import Button from "./components/Button/Button";
import AddFolder from "./assets/add-folder.svg?react";
import AddNote from "./assets/add-note.svg?react";

import "./index.scss";

export const App = () => {
  return (
    <BrowserRouter>
      <>
        <main className="main">
          <div className="main__sidebar-left">
            <Button title={"Добавить папку"}>
              <AddFolder width={30} height={30} />
            </Button>
            <BoardsListView />
          </div>
          <div className="main__sidebar-center">
            <Button title={"Добавить запись"}>
              <AddNote width={30} height={30} />
            </Button>
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
