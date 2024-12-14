import { ChangeEvent, useContext, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { InputContainer } from '../Input/InputContainer';
import { Input } from '../Input/Input';
import { Logo } from '../Logo/Logo';
import { Button } from '../Button/Button';
import { modalContext } from '../../contexts/modalContext';
import { DropdownList } from '../DropdownList/DropdownList';
import { useQueryUser } from '../../hooks/useQueryUser';
import { useQueryListFilms } from '../../hooks/useQueryListFilms';

import SearchSvg from '../../assets/input-search.svg?react';
import CloseSvg from '../../assets/input-exit.svg?react';
import GenresIcon from '../../assets/menuGenresIcon.svg?react';
import UserIcon from '../../assets/userdatawhite.svg?react';

import './Menu.css';

export const Menu = () => {
  const { handleSetVisibility, handleSwitchModal } = useContext(modalContext);
  const [searchParam, setSearchParam] = useSearchParams();
  const [inputVisible, setInputVisibility] = useState(false);

  const user = useQueryUser();

  const listFilms = useQueryListFilms(`${searchParam}`);

  const searchMovieTitle = searchParam.get('title') || '';
  const searchMovieGenre = searchParam.get('genre') || '';

  const handleSearchParam = (event: ChangeEvent<HTMLInputElement>) => {
    if (location.search.includes('genre')) {
      setSearchParam({
        genre: searchMovieGenre,
        title: event.target.value,
      });
    } else {
      setSearchParam({
        title: event.target.value,
      });
    }

    listFilms.refetch();
  };

  const filteredList = listFilms.data ? listFilms.data : [];

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  window.addEventListener('resize', () => {
    setWindowSize(window.innerWidth);
  });

  return (
    <div className="header__menu">
      <Link to={'/'}>
        <Logo />
      </Link>
      <div className="header__menu_right">
        <div className="header__menu_navigation">
          {windowSize > 376 && (
            <Link to={'/'}>
              <Button title="Главная" variant="menu" />
            </Link>
          )}
          <Link
            to={'/genres'}
            className={inputVisible ? 'disactive' : 'link-to-genres-page'}
          >
            {windowSize > 376 ? (
              <Button title="Жанры" variant="menu" />
            ) : (
              <GenresIcon />
            )}
          </Link>
          <span
            className={
              windowSize > 376
                ? 'header__menu_search'
                : inputVisible
                ? 'header__menu_search header__menu_search-active'
                : 'header__menu_search header__menu_search-disactive'
            }
          >
            <InputContainer variant="menu__input">
              <SearchSvg
                className="search-icon"
                onClick={
                  windowSize > 376
                    ? () => {}
                    : () => setInputVisibility(!inputVisible)
                }
              />
              <Input
                value={searchMovieTitle}
                type="text"
                placeholder="Поиск"
                variant={
                  windowSize > 376
                    ? 'dark'
                    : inputVisible
                    ? 'input--visible'
                    : 'input--invisible'
                }
                onChange={handleSearchParam}
              />
              <CloseSvg
                className={
                  windowSize > 376
                    ? 'icon-close'
                    : inputVisible
                    ? 'icon-close icon-close--active'
                    : 'icon-close icon-close--disactive'
                }
                onClick={() => {
                  if (windowSize > 376) {
                    setSearchParam('');
                  } else {
                    setInputVisibility(!inputVisible);
                    setSearchParam('');
                  }
                }}
              />
            </InputContainer>
            <DropdownList
              filteredList={filteredList}
              searchParamMovie={searchMovieTitle}
            />
          </span>
        </div>
        {user.status === 'error' ? (
          <div className={inputVisible ? 'disactive' : 'header__menu_account'}>
            {windowSize > 376 ? (
              <Button
                title="Войти"
                variant="menu"
                onClick={(event) => {
                  handleSetVisibility();
                  handleSwitchModal(event);
                }}
              />
            ) : (
              <button
                onClick={(event) => {
                  handleSetVisibility();
                  handleSwitchModal(event);
                }}
              >
                <UserIcon />
              </button>
            )}
          </div>
        ) : (
          <div className={inputVisible ? 'disactive' : 'header__menu_account'}>
            <Link to={'/account'} className="account-link">
              {windowSize > 376 ? (
                <Button title={user.data?.name} variant="menu" />
              ) : (
                <UserIcon className="account-logo" />
              )}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
