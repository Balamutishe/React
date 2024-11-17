import { TopListFilmsView } from '../../ui/List/TopListFilmsView';
import { RandomFilmView } from '../../ui/Preview/RandomFilmView';
import { Modal } from '../../ui/Modal/Modal';
import { useQueryRandomFilm } from '../../hooks/useQueryRandomFilm';

export const MainPage = () => {
  const RandomFilm = useQueryRandomFilm();

  const trailerUrl =
    RandomFilm.status === 'success' ? RandomFilm.data.trailerUrl : '';
  const poster =
    RandomFilm.status === 'success' ? RandomFilm.data.posterUrl : '';

  return (
    <>
      <Modal trailerUrl={trailerUrl} poster={poster} />

      <RandomFilmView queryRandomFilm={RandomFilm} />

      <TopListFilmsView />
    </>
  );
};
