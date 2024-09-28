import { FC } from 'react';
import { Card } from '../Card/Card';

import './List.css';
import { TMovieList } from '../../api/Movie';

interface IListProps {
  variant: 'movie' | 'genre';
  list: TMovieList;
}

export const List: FC<IListProps> = ({ variant, list }) => {
  return (
    <ul className='list'>
      {list.map((item) => (
        <li className={`list__item-${variant}`}>
          <Card
            variant={variant}
            title={item.title}
            image={item.posterUrl}
            raiting={item.tmdbRating}
          />
        </li>
      ))}
    </ul>
  );
};
