import { FC, ChangeEvent, useContext } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { InputContainer } from '../Input/InputContainer';
import { Input } from '../Input/Input';
import { Logo } from '../Logo/Logo';
import { Button } from '../Button/Button';
import { authStatusContext } from '../../contexts/authStatusContext';
import { DropdownList } from '../DropdownList/DropdownList';

import SearchSvg from '../../assets/input-search.svg?react';
import CloseSvg from '../../assets/input-exit.svg?react';

import './Menu.css';

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
          <DropdownList searchData={searchMovie} />
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
