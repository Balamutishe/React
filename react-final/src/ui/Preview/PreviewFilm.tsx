import { FC, useContext, useState } from 'react';
import { QueryObserverResult, useMutation } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

import LikeSvg from '../../assets/like-logo.svg?react';
import LikeSuccessSvg from '../../assets/like-success-logo.svg?react';
import SyncSvg from '../../assets/update-logo.svg?react';
import CloseSvg from '../../assets/close.svg?react';

import { Button } from '../Button/Button';
import {
  appendFavoritesFilm,
  deleteFavoritesFilm,
  TMovie,
} from '../../api/Movie';
import { queryClient } from '../../api/queryClient';
import { authStatusContext } from '../../contexts/authStatusContext';
import { FilmRaiting } from '../FilmRaiting/FilmRaiting';

import './PreviewFilm.css';
import { ModalTrailer } from '../Modal/ModalTrailer';

interface IPreviewProps {
  data: TMovie;
  refetch: () => Promise<QueryObserverResult<TMovie, Error>>;
  variant?: 'random' | 'main';
}

export const PreviewFilm: FC<IPreviewProps> = ({ data, refetch, variant }) => {
  const { status, user } = useContext(authStatusContext);

  const [visible, setVisibility] = useState(false);

  const handleSetVisibility = () => {
    setVisibility(!visible);
  };

  const userListFilmsFavorites = user ? user.favorites : [];
  const isFavorites = userListFilmsFavorites.includes(data.id.toString());
  const [favoritesState, setFavoritesState] = useState(isFavorites);

  const mutateAppendFavoritesFilms = useMutation(
    {
      mutationFn: () => appendFavoritesFilm(data.id.toString()),
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ['favoritesFilms'] });
      },
    },
    queryClient
  );

  const mutateDeleteFavoritesFilms = useMutation(
    {
      mutationFn: () => deleteFavoritesFilm(data.id.toString()),
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ['favoritesFilms'] });
      },
    },
    queryClient
  );

  const handleIsFavoritesFilm = () => {
    if (favoritesState) {
      setFavoritesState(false);
      return mutateDeleteFavoritesFilms.mutate();
    } else {
      setFavoritesState(true);
      return mutateAppendFavoritesFilms.mutate();
    }
  };

  console.log(data.trailerYouTubeId);

  return (
    <div className='preview'>
      <div className='preview__content-left'>
        <div className='preview__description'>
          <div className='preview__about'>
            <FilmRaiting raiting={Number(data.tmdbRating.toFixed(1))} />
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
          <Button
            title='Трейлер'
            variant='primary'
            onClick={handleSetVisibility}
          />
          {variant === 'random' && (
            <Link to={`/movie/${data.id}`}>
              <Button title='О фильме' variant='default' />
            </Link>
          )}
          {status === 'success' && (
            <Button
              title={
                favoritesState ? (
                  <LikeSuccessSvg width={20} height={18.5} />
                ) : (
                  <LikeSvg width={20} height={18.5} />
                )
              }
              variant='svg'
              onClick={() => handleIsFavoritesFilm()}
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
      <div className={visible ? 'overlay visible' : 'overlay invisible'}>
        <div className='modal modal_trailer'>
          <button className='button-modal-close' onClick={handleSetVisibility}>
            <CloseSvg width={22} height={22} />
          </button>
          <div className='modal__content'>
            <ModalTrailer
              visible={visible}
              handleSetVisibility={handleSetVisibility}
              trailerId={data.trailerYouTubeId}
              poster=''
            />
          </div>
        </div>
      </div>
    </div>
  );
};
