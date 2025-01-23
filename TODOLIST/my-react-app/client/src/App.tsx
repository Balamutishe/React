import { BrowserRouter, Route, Routes } from "react-router-dom";

import { MainPage } from "./pages/MainPage/MainPage";
import { NotePage } from "./pages/NotePage/NotePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/notes/:id" element={<NotePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
