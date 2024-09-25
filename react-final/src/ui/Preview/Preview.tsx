import StarRaiting from '../../assets/star-raiting.svg?react';
import LikeSvg from '../../assets/like-logo.svg?react';
import SyncSvg from '../../assets/update-logo.svg?react';
import PreviewImg from '../../assets/header-prewiev.jpg';
import { Button } from '../Button/Button';

import './Preview.css';

export const Preview = () => {
  return (
    <div className='preview'>
      <div className='preview__content-left'>
        <div className='preview__description'>
          <div className='preview__about'>
            <div className='preview__about_raiting'>
              <StarRaiting />
              7.5
            </div>
            <div>1979</div>
            <div>детектив</div>
            <div>1 ч 7 мин</div>
          </div>
          <h2 className='preview__title'>
            Шерлок Холмс и доктор Ватсон: Знакомство
          </h2>
          <p className='preview__text'>
            Увлекательные приключения самого известного сыщика всех времен
          </p>
        </div>
        <div className='preview__buttons'>
          <Button title='Трейлер' variant='primary' />
          <Button title='О фильме' variant='default' />
          <Button title={<LikeSvg width={20} height={18.5} />} variant='svg' />
          <Button title={<SyncSvg />} variant='svg' />
        </div>
      </div>
      <div className='preview__image'>
        <img src={PreviewImg} alt='#' />
      </div>
    </div>
  );
};
