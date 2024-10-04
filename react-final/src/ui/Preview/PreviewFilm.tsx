import { FC } from 'react';
import { useMutation } from '@tanstack/react-query';

import StarRaiting from '../../assets/star-raiting.svg?react';
import LikeSvg from '../../assets/like-logo.svg?react';
import SyncSvg from '../../assets/update-logo.svg?react';
import { Button } from '../Button/Button';
import { appendFavoritesFilm, TMovie } from '../../api/Movie';
import { queryClient } from '../../api/queryClient';

import './PreviewFilm.css';
import { QueryObserverResult } from '@tanstack/react-query';

interface IPreviewProps {
  data: TMovie;
  refetch: () => Promise<QueryObserverResult<TMovie, Error>>;
}

export const PreviewFilm: FC<IPreviewProps> = ({ data, refetch }) => {
  const mutateFavoritesFilms = useMutation(
    {
      mutationFn: () => appendFavoritesFilm(data.id),
    },
    queryClient
  );

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
              {data.genres.map((genre, index) => (
                <span className='preview__genre' key={index}>
                  {genre}
                </span>
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
          <Button
            title={<LikeSvg width={20} height={18.5} />}
            variant='svg'
            onClick={() => mutateFavoritesFilms.mutate()}
          />
          <Button title={<SyncSvg />} variant='svg' onClick={() => refetch()} />
        </div>
      </div>
      <div className='preview__image'>
        <img src={data.posterUrl} alt='#' />
      </div>
    </div>
  );
};
