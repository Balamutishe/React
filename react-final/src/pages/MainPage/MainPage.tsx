import { FetchTopListFilms } from '../../ui/List/FetchListTopFilms';
import { FetchRandomFilm } from '../../ui/Preview/FetchRandomFilm';

export const MainPage = () => {
  return (
    <>
      <FetchRandomFilm />
      <FetchTopListFilms />
    </>
  );
};
