import { FC } from 'react';

import './Card.css';

interface ICardProps {
  variant: 'movie' | 'genre';
  image?: string;
  title?: string;
  raiting?: number;
}

export const Card: FC<ICardProps> = ({ variant, title, image, raiting }) => {
  switch (variant) {
    case 'movie':
      return (
        <div className={`card card-${variant}`}>
          <img src={image} alt='' className={`card__image-${variant}`} />
          <div className='card__raiting'>{raiting}</div>
        </div>
      );
    case 'genre':
      return (
        <div className={`card card-${variant}`}>
          <div className='image-container'>
            <img src={image} alt='' className={`card__image-${variant}`} />
          </div>
          <div className='title-container'>
            <h3 className='card__title'>{title}</h3>
          </div>
        </div>
      );
  }
};
