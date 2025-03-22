import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';

import { Form } from '../Form/Form';
import { Player } from '../Player/Player';
import { toggleVisible } from '../../store/visibleSlice';
import { RootState } from '../../store/index';

import './Modal.css';

interface IModalProps {
  trailerUrl?: string;
}

export const Modal: FC<IModalProps> = ({ trailerUrl }) => {
  const modalVisible = useSelector((state: RootState) => state.modalVisible);
  const modalType = useSelector((state: RootState) => state.modalType);

  const dispatch = useDispatch();

  return (
    <div
      className={modalVisible ? 'overlay visible' : 'overlay invisible'}
      onClick={() => dispatch(toggleVisible(!modalVisible))}
    >
      <div
        className={
          modalType === 'modalRegister'
            ? 'modal modal_form'
            : 'modal modal_trailer'
        }
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={
            modalType === 'modalRegister'
              ? 'button-modal-close'
              : 'button-modal-close button-modal-close-trailer'
          }
          onClick={() => {
            dispatch(toggleVisible(!modalVisible));
          }}
        >
          <Image
            src={'../../assets/close.svg'}
            alt="#"
            width={22}
            height={22}
          />
        </button>

        {modalType === 'modalRegister' ? (
          <div className="modal__content">
            <div className="modal__header">
              <Image
                src={'../../assets/header-logo.svg'}
                alt="#"
                width={180}
                height={24}
              />
            </div>
            <div className="modal__main">
              <Form />
            </div>
          </div>
        ) : (
          trailerUrl && <Player url={trailerUrl} playingState={modalVisible} />
        )}
      </div>
    </div>
  );
};
