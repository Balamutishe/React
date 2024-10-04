import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Card } from '../Card/Card';
import { TMovieList } from '../../api/Movie';

import './List.css';

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
          <li className={`list__item-${variant}`} key={item.id}>
            <Link to={`/movie/${item.id}`}>
              <Card
                variant={variant}
                title={item.title}
                image={item.posterUrl}
                raiting={item.tmdbRating}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
