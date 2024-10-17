import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

import { queryClient } from '../../api/queryClient';
import { fetchListFilms } from '../../api/Movie';

import StarRaiting from '../../assets/star-raiting.svg?react';

import './DropdownList.css';

interface IDropdownList {
  searchData: string;
}

export const DropdownList: FC<IDropdownList> = ({ searchData }) => {
  const queryMoviesList = useQuery(
    {
      queryKey: ['movies', 'list'],
      queryFn: () => fetchListFilms(),
    },
    queryClient
  );

  const filteredMovieList = queryMoviesList.data
    ? queryMoviesList.data.filter(({ title }) => {
        if (searchData !== '')
          return title.toLowerCase().includes(searchData.toLowerCase());
      })
    : [];

  return (
    <div
      className={
        filteredMovieList.length === 0 && searchData === ''
          ? 'dropdown dropdown_invisible'
          : 'dropdown dropdown_visible'
      }
    >
      <ul className='dropdown__list'>
        {filteredMovieList.length !== 0
          ? filteredMovieList.map((movie) => (
              <li key={movie.id} className='dropdown__list-item'>
                <Link to={`/movie/${movie.id}`} className='dropdown__link'>
                  <div className='movie-search'>
                    <div className='movie-search__content_left'>
                      <img src={movie.posterUrl} alt='#' />
                    </div>
                    <div className='movie-search__content_right'>
                      <div className='movie-search__about'>
                        <span className='movie-search__raiting'>
                          <StarRaiting
                            width={14}
                            height={14}
                            className='star_raiting_img'
                          />
                          {movie.tmdbRating.toFixed(1)}
                        </span>
                        <span className='movie-search__relase-year'>
                          {movie.releaseYear}
                        </span>
                        <span>
                          {movie.genres.map((genre, index) => (
                            <span className='movie-search__genre' key={index}>
                              {genre}
                            </span>
                          ))}
                        </span>
                        <span>{movie.runtime} мин</span>
                      </div>
                      <h2 className='movie-search__title'>{movie.title}</h2>
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
