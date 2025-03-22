import { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from 'next/image';

import { Button } from '../../components/Button/Button';
import { ListFavoritesFilmsView } from '../../components/List/ListFavoritesFilmsView';
import { useMutationUserLogout } from '../../hooks/useMutationUserLogout';
import { useQueryUser } from '../../hooks/useQueryUser';
import MailSvg from '../../assets/mail.svg';

import './AccountPage.css';

const AccountPage = () => {
  const [accountContent, setAccountContent] = useState('settings');

  const userLogout = useMutationUserLogout();
  const user = useQueryUser().data;

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  window.addEventListener('resize', () => {
    setWindowSize(window.innerWidth);
  });

  return (
    <div className="account">
      <div className="account__header">
        <h1 className="account__title">Мой аккаунт</h1>
        <div className="account__buttons">
          <div className="account__button">
            <Image src={'../../assets/like-logo.svg'} alt="LikeIcon" />
            <Button
              title={windowSize > 376 ? 'Избранные фильмы' : 'Избранное'}
              variant="menu"
              onClick={() => setAccountContent('favorites')}
            />
          </div>
          <div className="account__button">
            <Image src={'../../assets/userdatawhite.svg'} alt="UserIcon" />
            <Button
              title={windowSize > 376 ? 'Настройки аккаунта' : 'Настройки'}
              variant="menu"
              onClick={() => setAccountContent('settings')}
            />
          </div>
        </div>
      </div>
      <div className="account__content">
        {accountContent === 'settings' && user ? (
          <div className="settings">
            <div className="userdata">
              <div className="userdata__logo">
                <span>{user.name.charAt(0)}</span>
                <span>{user.surname.charAt(0)}</span>
              </div>
              <div className="userdata__info">
                <span className="userdata__desc">Имя Фамилия</span>
                <span className="userdata__text">
                  {user.name} {user.surname}
                </span>
              </div>
            </div>

            <div className="userdata">
              <div className="userdata__logo">
                <MailSvg className="userdata__logo_mail" />
              </div>
              <div className="userdata__info">
                <span className="userdata__desc">Электронная почта</span>
                <span className="userdata__text">{user.email}</span>
              </div>
            </div>
            <Link to={'/'}>
              <Button
                title="Выйти из аккаунта"
                variant="primary"
                onClick={() => userLogout.mutate()}
              />
            </Link>
          </div>
        ) : (
          <ListFavoritesFilmsView />
        )}
      </div>
    </div>
  );
};

export default AccountPage;
