import { Link } from 'react-router-dom';
import { FC } from 'react';
import Image from 'next/image';

import { TMovieList } from '../../api/Movie';
import { TMovie } from '../../api/Movie';
import { FilmRaiting } from '../FilmRaiting/FilmRaiting';

import './DropdownList.css';

interface IDropdownList {
  filteredList: TMovieList;
  searchParamMovie: string;
}

export const DropdownList: FC<IDropdownList> = ({
  filteredList,
  searchParamMovie,
}) => {
  const filterGenresList = (movie: TMovie): string[] => {
    const arr = [];

    for (let i = 0; i < movie.genres.length; i++) {
      if (i <= 2) {
        arr.push(movie.genres[i]);
      }
    }

    return arr;
  };

  return (
    <div
      className={
        searchParamMovie === ''
          ? 'dropdown dropdown_invisible'
          : 'dropdown dropdown_visible'
      }
    >
      <ul className="dropdown__list">
        {filteredList.length !== 0 ? (
          filteredList.map((movie) => (
            <li key={crypto.randomUUID()} className="dropdown__list-item">
              <Link to={`/movie/${movie.id}`} className="dropdown__link">
                <div className="movie-search">
                  <div className="movie-search__content_left">
                    <Image src={movie.posterUrl} alt="#" />
                  </div>
                  <div className="movie-search__content_right">
                    <div className="movie-search__about">
                      <FilmRaiting
                        raiting={Number(movie.tmdbRating.toFixed(1))}
                      />
                      <span className="movie-search__relase-year">
                        {movie.releaseYear}
                      </span>
                      <ul className="movie-search__genres-list">
                        {filterGenresList(movie).map((genre) => (
                          <li key={crypto.randomUUID()}>{genre}</li>
                        ))}
                      </ul>
                      <span className="movie-runtime">{movie.runtime} мин</span>
                    </div>
                    <h2 className="movie-search__title">{movie.title}</h2>
                  </div>
                </div>
              </Link>
            </li>
          ))
        ) : (
          <li key={crypto.randomUUID()}>Фильм не найден</li>
        )}
      </ul>
    </div>
  );
};
