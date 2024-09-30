import { FC } from 'react';

import { Button } from '../Button/Button';

interface IAccountProps {
  onClick: () => void;
}

export const Account: FC<IAccountProps> = ({ onClick }) => {
  return (
    <div className='account'>
      <h1 className='account__title'>Мой аккаунт</h1>
      <div className='account__buttons'>
        <Button title='Избранные фильмы' variant='menu' onClick={onClick} />
        <Button title='Настройки аккаунта' variant='menu' onClick={onClick} />
      </div>
    </div>
  );
};
