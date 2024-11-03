import { ChangeEvent, useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link, useSearchParams } from 'react-router-dom';

import { InputContainer } from '../Input/InputContainer';
import { Input } from '../Input/Input';
import { Logo } from '../Logo/Logo';
import { Button } from '../Button/Button';
import { authStatusContext } from '../../contexts/authStatusContext';
import { DropdownList } from '../DropdownList/DropdownList';
import { queryClient } from '../../api/queryClient';
import { fetchListFilms } from '../../api/Movie';

import SearchSvg from '../../assets/input-search.svg?react';
import CloseSvg from '../../assets/input-exit.svg?react';

import './Menu.css';

export const Menu = () => {
  const { status, user, handleSetVisibility } = useContext(authStatusContext);
  const [searchParam, setSearchParam] = useSearchParams();

  const queryListFilms = useQuery(
    {
      queryKey: ['movie', 'title'],
      queryFn: () => fetchListFilms(`${searchParam}`),
    },
    queryClient
  );

  const handleSearchParam = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchParam({
      title: event.target.value,
    });

    queryListFilms.refetch();
  };

  const searchParamMovie = searchParam.get('title') || '';

  const filteredList = queryListFilms.data ? queryListFilms.data : [];

  return (
    <div className="header__menu">
      <div>
        <Logo />
      </div>
      <div className="header__menu_navigation">
        <Link to={'/'}>
          <Button title="Главная" variant="menu" />
        </Link>
        <Link to={'/genres'}>
          <Button title="Жанры" variant="menu" />
        </Link>
        <span className="header__menu_search">
          <InputContainer variant="dark">
            <SearchSvg />
            <Input
              value={searchParamMovie}
              type="text"
              placeholder="Поиск"
              variant="dark"
              onChange={handleSearchParam}
            />
            <CloseSvg />
          </InputContainer>
          <DropdownList
            filteredList={filteredList}
            searchParamMovie={searchParamMovie}
          />
        </span>
      </div>
      <div>
        {status === 'error' ? (
          <Button title="Войти" variant="menu" onClick={handleSetVisibility} />
        ) : (
          <Link to={'/account'}>
            <Button title={user?.name} variant="menu" />
          </Link>
        )}
      </div>
    </div>
  );
};
