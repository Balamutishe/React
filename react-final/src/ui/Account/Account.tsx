import { Button } from '../Button/Button';

export const Account = () => {
  return (
    <div className='account'>
      <h1 className='account__title'>Мой аккаунт</h1>
      <div className='account__buttons'>
        <Button title='Избранные фильмы' variant='menu' />
        <Button title='Настройки аккаунта' variant='menu' />
      </div>
    </div>
  );
};
