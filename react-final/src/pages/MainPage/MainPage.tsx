import { FetchTopListFilms } from '../../ui/List/FetchListTopFilms';
import { RandomFilmView } from '../../ui/Preview/RandomFilmView';
import { Modal } from '../../ui/Modal/Modal';
import { useQuery } from '@tanstack/react-query';
import { fetchRandomFilm } from '../../api/Movie';
import { queryClient } from '../../api/queryClient';

export const MainPage = () => {
  const queryRandomFilm = useQuery(
    {
      queryKey: ['randomFilm'],
      queryFn: () => fetchRandomFilm(),
    },
    queryClient
  );

  const trailerUrl =
    queryRandomFilm.status === 'success' ? queryRandomFilm.data.trailerUrl : '';
  const poster =
    queryRandomFilm.status === 'success' ? queryRandomFilm.data.posterUrl : '';

  return (
    <>
      <Modal trailerUrl={trailerUrl} poster={poster} />

      <RandomFilmView queryRandomFilm={queryRandomFilm} />
      <FetchTopListFilms />
    </>
  );
};
