import { FC } from 'react';

import StarRaiting from '../../assets/star-raiting.svg?react';

import './FilmRaiting.css';

interface IFilmRaiting {
  raiting: number;
}

export const FilmRaiting: FC<IFilmRaiting> = ({ raiting }) => {
  let raitingStyle = '';

  if (raiting >= 8) {
    raitingStyle = 'raiting raiting_very_high';
  } else if (raiting >= 7) {
    raitingStyle = 'raiting raiting_high';
  } else if (raiting >= 6) {
    raitingStyle = 'raiting raiting_middle';
  } else if (raiting < 6) {
    raitingStyle = 'raiting raiting_low';
  }

  return (
    <div className={raitingStyle}>
      <StarRaiting className="raiting__image" />
      {raiting}
    </div>
  );
};
