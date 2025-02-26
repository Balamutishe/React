import { BrowserRouter, Routes, Route } from "react-router-dom";

import Button from "./components/Button/Button";
import ListView from "./components/List/ListView";
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
            <ListView variant="board" />
          </div>
          <div className="main__sidebar-right">
            <Routes>
              <Route path="/" element={<div>Здесь пока нет записей</div>} />
              <Route path="/boards/:id" element={<ListView variant="note" />} />
            </Routes>
          </div>
        </main>
        <footer className="footer"></footer>
      </>
    </BrowserRouter>
  );
};

export default App;
