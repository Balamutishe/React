import { FC, ReactNode } from 'react';

import Logo from '../../assets/header-logo.svg?react';
import CloseSvg from '../../assets/close.svg?react';

import './Modal.css';

interface IModalProps {
  variant: 'auth' | 'register' | 'success';
  title?: string;
  children?: ReactNode;
}

export const Modal: FC<IModalProps> = ({ variant, title, children }) => {
  return (
    <div className='overlay'>
      <div className='modal'>
        <button className='button-modal-close'>
          <CloseSvg width={22} height={22} />
        </button>
        <div className='modal__content'>
          <div className='modal__header'>
            <Logo width={180} height={24} className='modal__logo' />
            {variant === 'register' ? (
              <h2 className='modal__title'>{title}</h2>
            ) : null}
          </div>
          <div className='modal__main'>{children}</div>
          <div className='modal__footer'>
            <button
              className={
                variant === 'success' ? 'hidden' : 'modal__footer-button'
              }
            >
              {variant === 'register' ? 'Регистрация' : 'У меня есть пароль'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
