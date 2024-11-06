import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../../ui/Button/Button';
import { ListFavoritesFilmsView } from '../../ui/List/ListFavoritesFilmsView';
import { useMutationUserLogout } from '../../hooks/useMutationUserLogout';
import { useQueryUser } from '../../hooks/useQueryUser';
import MailSvg from '../../assets/mail.svg?react';
import LikeSvg from '../../assets/like-logo.svg?react';
import UserSvg from '../../assets/userdatawhite.svg?react';

import './AccountPage.css';

export const AccountPage = () => {
  const [accountContent, setAccountContent] = useState(false);

  const userLogout = useMutationUserLogout();
  const user = useQueryUser().data;

  return (
    <div className="account">
      <div className="account__header">
        <h1 className="account__title">Мой аккаунт</h1>
        <div className="account__buttons">
          <div className="account__button">
            <LikeSvg />
            <Button
              title="Избранные фильмы"
              variant="menu"
              onClick={() => setAccountContent(!accountContent)}
            />
          </div>
          <div className="account__button">
            <UserSvg />
            <Button
              title="Настройки аккаунта"
              variant="menu"
              onClick={() => setAccountContent(!accountContent)}
            />
          </div>
        </div>
      </div>
      <div className="account__content">
        {accountContent && user ? (
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
