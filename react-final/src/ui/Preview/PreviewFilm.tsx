import { FC, useContext } from 'react';
import { QueryObserverResult, useMutation } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

import StarRaiting from '../../assets/star-raiting.svg?react';
import LikeSvg from '../../assets/like-logo.svg?react';
import SyncSvg from '../../assets/update-logo.svg?react';
import { Button } from '../Button/Button';
import { appendFavoritesFilm, TMovie } from '../../api/Movie';
import { queryClient } from '../../api/queryClient';
import { authStatusContext } from '../../contexts/authStatusContext';

import './PreviewFilm.css';

interface IPreviewProps {
  data: TMovie;
  refetch: () => Promise<QueryObserverResult<TMovie, Error>>;
  variant?: 'random' | 'main';
}

export const PreviewFilm: FC<IPreviewProps> = ({ data, refetch, variant }) => {
  const { status } = useContext(authStatusContext);

  const mutateFavoritesFilms = useMutation(
    {
      mutationFn: () => appendFavoritesFilm(data.id.toString()),
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
            <div>{data.releaseYear}</div>
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
          {variant === 'random' && (
            <Link to={`/movie/${data.id}`}>
              <Button title='О фильме' variant='default' />
            </Link>
          )}
          {status === 'success' && (
            <Button
              title={<LikeSvg width={20} height={18.5} />}
              variant='svg'
              onClick={() => mutateFavoritesFilms.mutate()}
            />
          )}
          {variant === 'random' && (
            <Button
              title={<SyncSvg />}
              variant='svg'
              onClick={() => refetch()}
            />
          )}
        </div>
      </div>
      <div className='preview__image'>
        <img src={data.posterUrl} alt='#' />
      </div>
    </div>
  );
};
