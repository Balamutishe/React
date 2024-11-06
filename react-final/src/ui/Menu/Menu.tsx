import { ChangeEvent, useContext } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { InputContainer } from '../Input/InputContainer';
import { Input } from '../Input/Input';
import { Logo } from '../Logo/Logo';
import { Button } from '../Button/Button';
import { authStatusContext } from '../../contexts/authStatusContext';
import { DropdownList } from '../DropdownList/DropdownList';
import { useQueryUser } from '../../hooks/useQueryUser';
import { useQueryListFilms } from '../../hooks/useQueryListFilms';

import SearchSvg from '../../assets/input-search.svg?react';
import CloseSvg from '../../assets/input-exit.svg?react';

import './Menu.css';

export const Menu = () => {
  const { handleSetVisibility } = useContext(authStatusContext);
  const [searchParam, setSearchParam] = useSearchParams();

  const user = useQueryUser();

  const listFilms = useQueryListFilms(`${searchParam}`);

  const handleSearchParam = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchParam({
      title: event.target.value,
    });

    listFilms.refetch();
  };

  const searchParamMovie = searchParam.get('title') || '';

  const filteredList = listFilms.data ? listFilms.data : [];

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
        {user.status === 'error' ? (
          <Button title="Войти" variant="menu" onClick={handleSetVisibility} />
        ) : (
          <Link to={'/account'}>
            <Button title={user.data?.name} variant="menu" />
          </Link>
        )}
      </div>
    </div>
  );
};
