import { useContext, FC } from 'react';

import { Form } from '../Form/Form';
import Logo from '../../assets/header-logo.svg?react';
import CloseSvg from '../../assets/close.svg?react';
import { modalContext } from '../../contexts/modalContext';
import { Player } from '../Player/Player';

import './Modal.css';

interface IModalProps {
  trailerUrl?: string;
}

export const Modal: FC<IModalProps> = ({ trailerUrl }) => {
  const { visible, modalVariant, handleSetVisibility } =
    useContext(modalContext);

  return (
    <div
      className={visible ? 'overlay visible' : 'overlay invisible'}
      onClick={handleSetVisibility}
    >
      <div
        className={
          modalVariant === 'form' ? 'modal modal_form' : 'modal modal_trailer'
        }
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={
            modalVariant === 'form'
              ? 'button-modal-close'
              : 'button-modal-close button-modal-close-trailer'
          }
          onClick={handleSetVisibility}
        >
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
          trailerUrl && <Player url={trailerUrl} playingState={visible} />
        )}
      </div>
    </div>
  );
};
