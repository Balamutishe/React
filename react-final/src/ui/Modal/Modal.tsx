import { FC } from 'react';

import { Form } from '../Form/Form';
import Logo from '../../assets/header-logo.svg?react';
import CloseSvg from '../../assets/close.svg?react';

import './Modal.css';

interface IModalProps {
  visible: boolean;
  handleSetVisibility: () => void;
}

export const Modal: FC<IModalProps> = ({ visible, handleSetVisibility }) => {
  return (
    <div className={visible ? 'overlay visible' : 'overlay invisible'}>
      <div className='modal modal_form'>
        <button className='button-modal-close' onClick={handleSetVisibility}>
          <CloseSvg width={22} height={22} />
        </button>
        <div className='modal__content'>
          <div className='modal__header'>
            <Logo width={180} height={24} />
          </div>
          <div className='modal__main'>
            <Form handleSetVisibility={handleSetVisibility} />
          </div>
        </div>
      </div>
    </div>
  );
};
