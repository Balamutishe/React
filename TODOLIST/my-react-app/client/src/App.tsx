import { BrowserRouter, Route, Routes } from "react-router-dom";

import { MainPage } from "./pages/MainPage/MainPage";
import { NotePage } from "./pages/NotePage/NotePage";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

function App() {
  return (
    <BrowserRouter>
      <Header authState={true} />
      <Main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/notes/:id" element={<NotePage />} />
        </Routes>
      </Main>
    </BrowserRouter>
  );
}

export default App;
