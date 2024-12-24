import { ChangeEvent, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';

import { InputContainer } from '../Input/InputContainer';
import { Input } from '../Input/Input';
import { Logo } from '../Logo/Logo';
import { Button } from '../Button/Button';
import { DropdownList } from '../DropdownList/DropdownList';
import { useQueryUser } from '../../hooks/useQueryUser';
import { useQueryListFilms } from '../../hooks/useQueryListFilms';
import { toggleVisible } from '../../store/visibleSlice';
import { toggleModalType } from '../../store/modalTypeSlice';
import { RootState } from '../../store';

import './Menu.css';

export const Menu = () => {
  const modalVisible = useSelector((state: RootState) => state.modalVisible);

  const dispatch = useDispatch();

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
              <Image src={'../../assets/menuGenresIcon.svg'} alt="#" />
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
              <Image
                src={'../../assets/input-search.svg'}
                alt="#"
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
              <Image
                src={'../../assets/input-exit.svg'}
                alt="#"
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
                onClick={() => {
                  dispatch(toggleModalType('modalRegister'));
                  dispatch(toggleVisible(!modalVisible));
                }}
              />
            ) : (
              <button
                onClick={() => {
                  dispatch(toggleModalType('modalRegister'));
                  dispatch(toggleVisible(!modalVisible));
                }}
              >
                <Image src={'../../assets/userdatawhite.svg'} alt="#" />
              </button>
            )}
          </div>
        ) : (
          <div className={inputVisible ? 'disactive' : 'header__menu_account'}>
            <Link to={'/account'} className="account-link">
              {windowSize > 376 ? (
                <Button title={user.data?.name} variant="menu" />
              ) : (
                <Image
                  src={'../../assets/userdatawhite.svg'}
                  alt="#"
                  className="account-logo"
                />
              )}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
