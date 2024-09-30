import { FC } from 'react';
import { Card } from '../Card/Card';

import './List.css';
import { TMovieList } from '../../api/Movie';

interface IListProps {
  variant: 'movie' | 'genre';
  list: TMovieList;
  title?: string;
}

export const List: FC<IListProps> = ({ variant, list, title }) => {
  return (
    <div className='list-container'>
      {title && <h2 className='list__title'>{title}</h2>}
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
    </div>
  );
};
