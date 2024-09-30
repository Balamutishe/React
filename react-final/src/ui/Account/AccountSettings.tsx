import { FC } from 'react';

import { Button } from '../Button/Button';

import './Account.css';
import { User } from '../../api/User';

interface IAccountSettingsProps {
  user: User;
}

export const AccountSettings: FC<IAccountSettingsProps> = ({ user }) => {
  return (
    <div className='account__settings'>
      <div className='account__userdata'>
        <div className='account__userdata_container'>
          <div className='account__userdata_logo'></div>
          <div className='account__userdata_username'>
            <span className='account__userdata_desc'></span>
            <span className='account__userdata_text'>
              {user.name} {user.surname}
            </span>
          </div>
        </div>

        <div className='account__settings_container'>
          <div className='account__userdata_logo'></div>
          <div className='account__userdata_useremail'>
            <span className='account__userdata_desc'></span>
            <span className='account__userdata_text'>{user.email}</span>
          </div>
        </div>
      </div>

      <Button title='Выйти из аккаунта' variant='primary' />
    </div>
  );
};
