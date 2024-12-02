import { Link } from 'react-router-dom';
import { FC } from 'react';

import { TMovieList } from '../../api/Movie';
import { TMovie } from '../../api/Movie';

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
        {filteredList.length !== 0
          ? filteredList.map((movie) => (
              <li key={movie.id} className="dropdown__list-item">
                <Link to={`/movie/${movie.id}`} className="dropdown__link">
                  <div className="movie-search">
                    <div className="movie-search__content_left">
                      <img src={movie.posterUrl} alt="#" />
                    </div>
                    <div className="movie-search__content_right">
                      <div className="movie-search__about">
                        <span className="movie-search__relase-year">
                          {movie.releaseYear}
                        </span>
                        <span>{filterGenresList(movie)}</span>
                        <span className="movie-runtime">
                          {movie.runtime} мин
                        </span>
                      </div>
                      <h2 className="movie-search__title">{movie.title}</h2>
                    </div>
                  </div>
                </Link>
              </li>
            ))
          : 'Фильм не найден'}
      </ul>
    </div>
  );
};
