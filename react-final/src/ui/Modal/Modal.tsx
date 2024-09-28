import { useState } from 'react';

import { Form } from '../Form/Form';
import Logo from '../../assets/header-logo.svg?react';
import CloseSvg from '../../assets/close.svg?react';

import './Modal.css';

export const Modal = () => {
  const [authState, setAuthState] = useState('register');

  return (
    <div className='overlay'>
      <div className='modal'>
        <button className='button-modal-close'>
          <CloseSvg width={22} height={22} />
        </button>
        <div className='modal__content'>
          <div className='modal__header'>
            <Logo width={180} height={24} />
          </div>
          <div className='modal__main'>
            <Form
              title={authState === 'register' ? 'Регистрация' : ''}
              variant={authState === 'register' ? 'register' : 'login'}
            />
          </div>
          <div className='modal__footer'>
            {authState === 'register' ? (
              <button
                className='modal__footer-button'
                onClick={() => setAuthState('login')}
              >
                Регистрация
              </button>
            ) : (
              <button
                className='modal__footer-button'
                onClick={() => setAuthState('register')}
              >
                У меня есть пароль
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
