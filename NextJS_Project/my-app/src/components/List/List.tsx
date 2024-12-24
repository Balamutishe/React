import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Card } from '../Card/Card';
import { TMovieList } from '../../api/Movie';

import './List.css';

interface IListProps {
  moviesList?: TMovieList;
  genresList?: string[];
  title?: string;
}

export const List: FC<IListProps> = ({ moviesList, genresList, title }) => {
  return (
    <div className="list-container">
      {title && <h2 className="list__title">{title}</h2>}
      {moviesList && (
        <ul className="list list_movie">
          {moviesList.map((movie) => (
            <li className="list__item-movie" key={crypto.randomUUID()}>
              <Link to={`/movie/${movie.id}`}>
                <Card variant="movie" movie={movie} />
              </Link>
            </li>
          ))}
        </ul>
      )}
      {genresList && (
        <ul className="list list_genres">
          {genresList.map((genre) => (
            <li className="list__item-genre" key={crypto.randomUUID()}>
              <Link to={`/movie?genre=${genre}`}>
                <Card variant="genre" genre={genre} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
