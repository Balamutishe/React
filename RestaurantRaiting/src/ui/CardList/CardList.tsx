import { FC } from 'react';
import { RestaurantList } from '../../api/api';

import { Card } from '../Card/Card';

interface CardListProps {
  restaurantsList: RestaurantList | undefined;
}

export const CardList: FC<CardListProps> = ({ restaurantsList }) => {
  return (
    <ul className='card-list'>
      {restaurantsList?.map((restaurant) => (
        <li key={restaurant.id} className='card-list__item'>
          <Card restaurant={restaurant} />
        </li>
      ))}
    </ul>
  );
};
