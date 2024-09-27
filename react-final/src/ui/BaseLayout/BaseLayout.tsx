import { InputContainer } from '../Input/InputContainer';
import { Input } from '../Input/Input';
import { Logo } from '../Logo/Logo';
import SearchSvg from '../../assets/input-search.svg?react';
import CloseSvg from '../../assets/input-exit.svg?react';
import { Button } from '../Button/Button';
import { Preview } from '../Preview/Preview';
import { List } from '../List/List';
import { FooterContent } from '../FooterContent/FooterContent';

import './BaseLayout.css';

export const BaseLayout = () => {
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
                <Input type='text' placeholder='Поиск' variant='dark' />
                <CloseSvg />
              </InputContainer>
            </span>
          </div>
          <div>
            <Button title='Войти' variant='menu' />
          </div>
        </div>
        <div className='header__preview'>
          <Preview />
        </div>
      </header>
      <main className='container main'>
        <div className='main__title'>Топ 10 фильмов</div>
        <div className='main__content'>
          <List variant='movie' />
        </div>
      </main>
      <footer className='container footer'>
        <FooterContent />
      </footer>
    </>
  );
};
