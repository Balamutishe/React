import { useContext, FC } from 'react';

import { Form } from '../Form/Form';
import Logo from '../../assets/header-logo.svg?react';
import CloseSvg from '../../assets/close.svg?react';
import { authStatusContext } from '../../contexts/authStatusContext';
import { Player } from '../Player/Player';

import './Modal.css';

interface IModalProps {
  trailerUrl: string;
  poster: string;
}

export const Modal: FC<IModalProps> = ({ trailerUrl, poster }) => {
  const { visible, modalVariant, handleSetVisibility } =
    useContext(authStatusContext);

  return (
    <div className={visible ? 'overlay visible' : 'overlay invisible'}>
      <div
        className={
          modalVariant === 'form' ? 'modal modal_form' : 'modal modal_trailer'
        }
      >
        <button className="button-modal-close" onClick={handleSetVisibility}>
          <CloseSvg width={22} height={22} />
        </button>
        {modalVariant === 'form' ? (
          <div className="modal__content">
            <div className="modal__header">
              <Logo width={180} height={24} />
            </div>
            <div className="modal__main">
              <Form />
            </div>
          </div>
        ) : (
          <Player url={trailerUrl} poster={poster} />
        )}
      </div>
    </div>
  );
};
