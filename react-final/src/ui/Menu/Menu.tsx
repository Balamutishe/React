import { useState, FC } from 'react';
import { Link } from 'react-router-dom';

import { InputContainer } from '../Input/InputContainer';
import { Input } from '../Input/Input';
import { Logo } from '../Logo/Logo';
import SearchSvg from '../../assets/input-search.svg?react';
import CloseSvg from '../../assets/input-exit.svg?react';
import { Button } from '../Button/Button';

import './Menu.css';

interface IMenuProps {
  authStatus: 'pending' | 'success' | 'error';
  userName: string | undefined;
  onClick: () => void;
}

export const Menu: FC<IMenuProps> = ({ onClick, authStatus, userName }) => {
  const [searchValue, setSearchValue] = useState('');

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
              value={searchValue}
              type='text'
              placeholder='Поиск'
              variant='dark'
              onChange={(event) => setSearchValue(event.target.value)}
            />
            <CloseSvg />
          </InputContainer>
        </span>
      </div>
      <div>
        {authStatus === 'error' ? (
          <Button title='Войти' variant='menu' onClick={onClick} />
        ) : (
          <Link to={'/account'}>
            <Button
              title={userName ? userName : 'Имя пользователя не найдено'}
              variant='menu'
            />
          </Link>
        )}
      </div>
    </div>
  );
};
