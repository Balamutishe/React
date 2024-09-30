import { useState, FC } from 'react';

import { Form } from '../Form/Form';
import Logo from '../../assets/header-logo.svg?react';
import CloseSvg from '../../assets/close.svg?react';

import './Modal.css';

interface IModalProps {
  visible: boolean;
  handleClick: () => void;
}

export const Modal: FC<IModalProps> = ({ visible, handleClick }) => {
  const [authState, setAuthState] = useState('register');

  return (
    <div className={visible ? 'overlay visible' : 'overlay invisible'}>
      <div className='modal'>
        <button className='button-modal-close' onClick={handleClick}>
          <CloseSvg width={22} height={22} />
        </button>
        <div className='modal__content'>
          <div className='modal__header'>
            <Logo width={180} height={24} />
          </div>
          <div className='modal__main'>
            <Form variant={authState === 'register' ? 'register' : 'login'} />
          </div>
          <div className='modal__footer'>
            {authState === 'register' ? (
              <button
                className='modal__footer-button'
                onClick={() => setAuthState('login')}
              >
                У меня есть пароль
              </button>
            ) : (
              <button
                className='modal__footer-button'
                onClick={() => setAuthState('register')}
              >
                Регистрация
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
