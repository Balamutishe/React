import { FC, useState } from 'react';
import { Restaurant, updateRestaurantRating } from '../../api/api';
import { RaitingStar } from '../RaitingStar/RaitingStar';

interface CardProps {
  restaurant: Restaurant;
}

export const Card: FC<CardProps> = ({ restaurant }) => {
  const [raiting, setRaiting] = useState(restaurant.raiting);

  const changeRaiting = (newRaiting: number) => {
    setRaiting(newRaiting);

    updateRestaurantRating({ id: restaurant.id, raiting: newRaiting });
  };

  return (
    <div className='card'>
      <div className='card__prewiev'>
        <img src={restaurant.url} alt='' />
      </div>
      <div className='card__content'>
        <div className='card__content-header'>
          <h3 className='card__title'>{restaurant.name}</h3>
          <div className='card__description'>
            {restaurant.description}, {raiting} stars
          </div>
        </div>
        <RaitingStar raiting={raiting} changeRaiting={changeRaiting} />
      </div>
    </div>
  );
};
