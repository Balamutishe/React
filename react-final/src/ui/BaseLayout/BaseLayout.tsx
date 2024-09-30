import { useState } from 'react';

import { InputContainer } from '../Input/InputContainer';
import { Input } from '../Input/Input';
import { Logo } from '../Logo/Logo';
import SearchSvg from '../../assets/input-search.svg?react';
import CloseSvg from '../../assets/input-exit.svg?react';
import { Button } from '../Button/Button';
import { FetchTopListFilms } from '../List/FetchListTopFilms';
import { FooterContent } from '../FooterContent/FooterContent';
import { Modal } from '../Modal/Modal';

import './BaseLayout.css';
import { FetchRandomFilm } from '../Preview/FetchRandomFilm';

export const BaseLayout = () => {
  const [searchValue, setSearchValue] = useState('');
  const [visible, setVisibility] = useState(false);

  const handleClick = () => {
    setVisibility(!visible);
  };

  return (
    <>
      <header className='container header'>
        <div className='header__menu'>
          <div>
            <Logo />
          </div>
          <div className='header__navigation'>
            <Button title='Главная' variant='menu' />
            <Button title='Жанры' variant='menu' />
            <span className='header__search'>
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
            <Button title='Войти' variant='menu' onClick={handleClick} />
          </div>
        </div>
        <div className='header__preview'>
          <FetchRandomFilm />
        </div>
      </header>
      <main className='container main'>
        <div className='main__title'>Топ 10 фильмов</div>
        <div className='main__content'>
          <FetchTopListFilms />
        </div>
      </main>
      <footer className='container footer'>
        <FooterContent />
      </footer>
      <Modal visible={visible} handleClick={handleClick} />
    </>
  );
};
