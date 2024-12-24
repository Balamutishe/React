import { FC } from 'react';
import Image from 'next/image';

import { TMovie } from '../../api/Movie';

import './Card.css';

interface ICardProps {
  variant: 'movie' | 'genre';
  movie?: TMovie;
  genre?: string;
}

export const Card: FC<ICardProps> = ({ variant, movie, genre }) => {
  switch (variant) {
    case 'movie':
      return (
        movie && (
          <div className={`card card-${variant}`}>
            <Image
              src={movie.posterUrl}
              alt="#"
              className={`card__image-${variant}`}
            />
            <div className="card__raiting">{movie.tmdbRating.toFixed(1)}</div>
          </div>
        )
      );
    case 'genre':
      return (
        genre && (
          <div className={`card card-${variant}`}>
            <div className="image-container">
              <Image src="#" alt="" className={`card__image-${variant}`} />
            </div>
            <div className="title-container">
              <h3 className="card__title">{genre}</h3>
            </div>
          </div>
        )
      );
  }
};
