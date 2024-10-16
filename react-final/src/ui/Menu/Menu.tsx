import { FC, ChangeEvent, useContext } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { InputContainer } from '../Input/InputContainer';
import { Input } from '../Input/Input';
import { Logo } from '../Logo/Logo';
import SearchSvg from '../../assets/input-search.svg?react';
import CloseSvg from '../../assets/input-exit.svg?react';
import { Button } from '../Button/Button';
import { authStatusContext } from '../../contexts/authStatusContext';

import './Menu.css';
import { useQuery } from '@tanstack/react-query';
import { fetchListFilms } from '../../api/Movie';
import { queryClient } from '../../api/queryClient';

interface IMenuProps {
  handleSetVisibility: () => void;
}

export const Menu: FC<IMenuProps> = ({ handleSetVisibility }) => {
  const { status, userName } = useContext(authStatusContext);
  const [searchParam, setSearchParam] = useSearchParams();

  const handleSearchParam = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchParam({
      movieTitle: event.target.value,
    });
  };

  const searchMovie = searchParam.get('movieTitle') || '';

  const queryMoviesList = useQuery(
    {
      queryKey: ['movies', 'list'],
      queryFn: () => fetchListFilms(),
    },
    queryClient
  );

  const filteredMovieList = queryMoviesList.data
    ? queryMoviesList.data.filter(({ title }) => {
        if (searchMovie !== '')
          return title.toLowerCase().includes(searchMovie.toLowerCase());
      })
    : [];

  return (
    <div className='header__menu'>
      <div>
        <Logo />
      </div>
      <div className='header__menu_navigation'>
        <Link to={'/'}>
          <Button title='Главная' variant='menu' />
        </Link>
        <Link to={'/genres'}>
          <Button title='Жанры' variant='menu' />
        </Link>
        <span className='header__menu_search'>
          <InputContainer variant='dark'>
            <SearchSvg />
            <Input
              value={searchMovie}
              type='text'
              placeholder='Поиск'
              variant='dark'
              onChange={handleSearchParam}
            />
            <CloseSvg />
          </InputContainer>
          <div
            className={
              filteredMovieList.length === 0 && searchMovie === ''
                ? 'dropdown'
                : 'dropdown dropdown--visible'
            }
          >
            <ul className='dropdown__list'>
              {filteredMovieList.length !== 0
                ? filteredMovieList.map((movie) => (
                    <li>
                      <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                    </li>
                  ))
                : 'Фильм не найден'}
            </ul>
          </div>
        </span>
      </div>
      <div>
        {status === 'error' ? (
          <Button title='Войти' variant='menu' onClick={handleSetVisibility} />
        ) : (
          <Link to={'/account'}>
            <Button title={userName} variant='menu' />
          </Link>
        )}
      </div>
    </div>
  );
};
