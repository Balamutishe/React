import { FC } from 'react';
import { Card } from '../Card/Card';

import './List.css';

interface IListProps {
  variant: 'movie' | 'genre';
}

export const List: FC<IListProps> = ({ variant }) => {
  return (
    <ul className='list'>
      <li className={`list__item-${variant}`}>
        <Card variant={variant} />
      </li>
      <li className={`list__item-${variant}`}>
        <Card variant={variant} />
      </li>
      <li className={`list__item-${variant}`}>
        <Card variant={variant} />
      </li>
      <li className={`list__item-${variant}`}>
        <Card variant={variant} />
      </li>
      <li className={`list__item-${variant}`}>
        <Card variant={variant} />
      </li>
      <li className={`list__item-${variant}`}>
        <Card variant={variant} />
      </li>
      <li className={`list__item-${variant}`}>
        <Card variant={variant} />
      </li>
      <li className={`list__item-${variant}`}>
        <Card variant={variant} />
      </li>
    </ul>
  );
};
