import { FC, useEffect, useMemo, useState } from 'react';
import { QueryObserverResult } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Image from 'next/image';

import { Button } from '../Button/Button';
import {
  appendFavoritesFilm,
  deleteFavoritesFilm,
  TMovie,
} from '../../api/Movie';
import { FilmRaiting } from '../FilmRaiting/FilmRaiting';
import { useQueryUser } from '../../hooks/useQueryUser';
import { useMutationFavoritesFilms } from '../../hooks/useMutationFavoritesFilms';
import { toggleVisible } from '../../store/visibleSlice';
import { toggleModalType } from '../../store/modalTypeSlice';
import { RootState } from '../../store';

import './PreviewFilm.css';

interface IPreviewProps {
  data: TMovie;
  refetch: () => Promise<QueryObserverResult<TMovie, Error>>;
  variant: 'random' | 'main' | 'filmPage';
}

export const PreviewFilm: FC<IPreviewProps> = ({ data, refetch, variant }) => {
  const modalVisible = useSelector((state: RootState) => state.modalVisible);

  const dispatch = useDispatch();

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

  const filterGenresList = () => {
    const listGenres: string[] = [];

    for (let i = 0; i < data.genres.length; i++) {
      if (i <= 2) {
        listGenres.push(data.genres[i]);
      }
    }

    return listGenres;
  };

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  window.addEventListener('resize', () => {
    setWindowSize(window.innerWidth);
  });

  return (
    <div className="preview">
      <div className="preview__content-left">
        <div className="preview__description">
          <div className="preview__about">
            <FilmRaiting raiting={Number(data.tmdbRating.toFixed(1))} />
            <div>{data.releaseYear}</div>
            <ul className="list-genres">
              {filterGenresList().map((genre) => (
                <li key={crypto.randomUUID()}>{genre}</li>
              ))}
            </ul>
            <div>{data.runtime} мин</div>
          </div>
          <h2 className="preview__title">{data.title}</h2>
          <p className="preview__text">{data.plot}</p>
        </div>
        <div
          className={
            variant === 'filmPage' && windowSize <= 376
              ? 'preview__buttons_film-page'
              : 'preview__buttons'
          }
        >
          <Button
            title="Трейлер"
            variant="primary"
            onClick={() => {
              dispatch(toggleModalType('modalTrailer'));
              dispatch(toggleVisible(!modalVisible));
            }}
          />
          {variant === 'random' && (
            <Link to={`/movie/${data.id}`}>
              <Button title="О фильме" variant="default" />
            </Link>
          )}
          <Button
            title={
              favoritesState ? (
                <Image
                  src={'../../assets/like-success-logo.svg'}
                  alt="#"
                  width={20}
                  height={18.5}
                />
              ) : (
                <Image
                  src={'../../assets/like-logo.svg'}
                  alt="#"
                  width={20}
                  height={18.5}
                />
              )
            }
            variant="svg"
            onClick={
              queryUser.status === 'success'
                ? () => {
                    mutationFavoritesFilms.mutate();
                  }
                : () => {
                    dispatch(toggleModalType('modalRegister'));
                    dispatch(toggleVisible(!modalVisible));
                  }
            }
          />
          {variant === 'random' && (
            <Button
              title={<Image src={'../../assets/update-logo.svg'} alt="#" />}
              variant="svg"
              onClick={() => refetch()}
            />
          )}
        </div>
      </div>
      <div className="preview__image">
        <Image src={data.posterUrl} alt="#" />
      </div>
    </div>
  );
};
