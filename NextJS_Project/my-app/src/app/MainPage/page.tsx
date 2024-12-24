import { TopListFilmsView } from '../../components/List/TopListFilmsView';
import { RandomFilmView } from '../../components/Preview/RandomFilmView';
import { Modal } from '../../components/Modal/Modal';
import { useQueryRandomFilm } from '../../hooks/useQueryRandomFilm';

const MainPage = () => {
  const RandomFilm = useQueryRandomFilm();

  const trailerUrl =
    RandomFilm.status === 'success' ? RandomFilm.data.trailerUrl : '';

  return (
    <>
      <Modal trailerUrl={trailerUrl} />

      <RandomFilmView queryRandomFilm={RandomFilm} />

      <TopListFilmsView />
    </>
  );
};

export default MainPage;
