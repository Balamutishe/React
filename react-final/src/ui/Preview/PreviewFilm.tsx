import { FC, useContext, useEffect, useMemo, useState } from 'react';
import { QueryObserverResult } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

import LikeSvg from '../../assets/like-logo.svg?react';
import LikeSuccessSvg from '../../assets/like-success-logo.svg?react';
import SyncSvg from '../../assets/update-logo.svg?react';

import { Button } from '../Button/Button';
import {
  appendFavoritesFilm,
  deleteFavoritesFilm,
  TMovie,
} from '../../api/Movie';
import { authStatusContext } from '../../contexts/authStatusContext';
import { FilmRaiting } from '../FilmRaiting/FilmRaiting';
import { useQueryUser } from '../../hooks/useQueryUser';
import { useMutationFavoritesFilms } from '../../hooks/useMutationFavoritesFilms';

import './PreviewFilm.css';

interface IPreviewProps {
  data: TMovie;
  refetch: () => Promise<QueryObserverResult<TMovie, Error>>;
  variant?: 'random' | 'main';
}

export const PreviewFilm: FC<IPreviewProps> = ({ data, refetch, variant }) => {
  const { handleSetVisibility } = useContext(authStatusContext);
  const queryUser = useQueryUser();

  const userListFilmsFavorites = useMemo(
    () => (queryUser.data ? queryUser.data.favorites : []),
    [queryUser.data]
  );

  const [favoritesState, setFavoritesState] = useState(
    userListFilmsFavorites.includes(data.id.toString())
  );

  const mutationFavoritesFilms = useMutationFavoritesFilms(
    data.id.toString(),
    () =>
      favoritesState
        ? deleteFavoritesFilm(data.id.toString())
        : appendFavoritesFilm(data.id.toString())
  );

  useEffect(() => {
    setFavoritesState(userListFilmsFavorites.includes(data.id.toString()));
  }, [data.id, userListFilmsFavorites]);

  return (
    <div className="preview">
      <div className="preview__content-left">
        <div className="preview__description">
          <div className="preview__about">
            <FilmRaiting raiting={Number(data.tmdbRating.toFixed(1))} />
            <div>{data.releaseYear}</div>
            <div>
              {data.genres.map((genre, index) => (
                <span className="preview__genre" key={index}>
                  {genre}
                </span>
              ))}
            </div>
            <div>{data.runtime} мин</div>
          </div>
          <h2 className="preview__title">{data.title}</h2>
          <p className="preview__text">{data.plot}</p>
        </div>
        <div className="preview__buttons">
          <Button
            title="Трейлер"
            variant="primary"
            onClick={handleSetVisibility}
          />
          {variant === 'random' && (
            <Link to={`/movie/${data.id}`}>
              <Button title="О фильме" variant="default" />
            </Link>
          )}
          <Button
            title={
              favoritesState ? (
                <LikeSuccessSvg width={20} height={18.5} />
              ) : (
                <LikeSvg width={20} height={18.5} />
              )
            }
            variant="svg"
            onClick={
              queryUser.status === 'success'
                ? () => {
                    mutationFavoritesFilms.mutate();
                  }
                : handleSetVisibility
            }
          />
          {variant === 'random' && (
            <Button
              title={<SyncSvg />}
              variant="svg"
              onClick={() => refetch()}
            />
          )}
        </div>
      </div>
      <div className="preview__image">
        <img src={data.posterUrl} alt="#" />
      </div>
    </div>
  );
};
