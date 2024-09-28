import { FC } from 'react';

import StarRaiting from '../../assets/star-raiting.svg?react';
import LikeSvg from '../../assets/like-logo.svg?react';
import SyncSvg from '../../assets/update-logo.svg?react';
import { Button } from '../Button/Button';
import { TMovie } from '../../api/Movie';

import './Preview.css';

interface IPreviewProps {
  data: TMovie;
}

export const Preview: FC<IPreviewProps> = ({ data }) => {
  return (
    <div className='preview'>
      <div className='preview__content-left'>
        <div className='preview__description'>
          <div className='preview__about'>
            <div className='preview__about_raiting'>
              <StarRaiting />
              {data.tmdbRating}
            </div>
            <div>{data.relaseYear}</div>
            <div>
              {data.genres.map((genre) => (
                <span className='preview__genre'>{genre}</span>
              ))}
            </div>
            <div>{data.runtime} мин</div>
          </div>
          <h2 className='preview__title'>{data.title}</h2>
          <p className='preview__text'>{data.plot}</p>
        </div>
        <div className='preview__buttons'>
          <Button title='Трейлер' variant='primary' />
          <Button title='О фильме' variant='default' />
          <Button title={<LikeSvg width={20} height={18.5} />} variant='svg' />
          <Button title={<SyncSvg />} variant='svg' />
        </div>
      </div>
      <div className='preview__image'>
        <img src={data.posterUrl} alt='#' />
      </div>
    </div>
  );
};
