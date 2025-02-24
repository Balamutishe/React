import Button from "./components/Button/Button";
import List from "./components/List/List";
import { boardsList } from "./api/Boards";
import "./index.scss";
import Card from "./components/Card/Card";

export const App = () => {
  return (
    <>
      <header className="header">
        <h1>TodoList</h1>
      </header>
      <main className="main">
        <div className="main__sidebar-left">
          <Button title="Добавить доску" />
          <List data={boardsList} />
        </div>
        <div className="main__sidebar-right">
          <Card text="Снова делаем делишки" />
          <Card text="Снова делаем делишки" />
          <Card text="Снова делаем делишки" />
          <Card text="Снова делаем делишки" />
        </div>
      </main>
      <footer className="footer"></footer>
    </>
  );
};

export default App;
