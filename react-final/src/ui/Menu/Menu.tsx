import { useState, FC } from 'react';

import { InputContainer } from '../Input/InputContainer';
import { Input } from '../Input/Input';
import { Logo } from '../Logo/Logo';
import SearchSvg from '../../assets/input-search.svg?react';
import CloseSvg from '../../assets/input-exit.svg?react';
import { Button } from '../Button/Button';

import './Menu.css';

interface IMenuProps {
  onClick: () => void;
}

export const Menu: FC<IMenuProps> = ({ onClick }) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className='header__menu'>
      <div>
        <Logo />
      </div>
      <div className='header__menu_navigation'>
        <Button title='Главная' variant='menu' />
        <Button title='Жанры' variant='menu' />
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
        <Button title='Войти' variant='menu' onClick={onClick} />
      </div>
    </div>
  );
};
