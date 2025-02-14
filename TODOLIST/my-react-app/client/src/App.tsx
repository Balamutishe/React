import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { MainPage } from "./pages/MainPage/MainPage";
import { NotePage } from "./pages/NotePage/NotePage";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { useQueryUser } from "./hooks/useQueryUser";
import { setUserData } from "./redux/UserDataSlice";

function App() {
  const dispatch = useDispatch();
  const queryUser = useQueryUser();

  useEffect(() => {
    dispatch(
      setUserData({
        username: queryUser.data
          ? queryUser.data.username
          : "Имя пользователя не найдено",
        authStatusUser: queryUser.status,
      })
    );
  }, [queryUser.data, queryUser.status, dispatch]);

  return (
    <BrowserRouter>
      <Header />
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
