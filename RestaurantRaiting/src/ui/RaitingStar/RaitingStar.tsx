import { FC } from 'react';
import StarIcon from '../../assets/star.svg?react';

interface RatingStarProps {
  raiting: number;
  changeRaiting: (newRaiting: number) => void;
}

export const RaitingStar: FC<RatingStarProps> = ({
  raiting,
  changeRaiting,
}) => {
  return (
    <div className='card__raiting'>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <StarIcon
            key={index}
            data-raiting={index + 1}
            className={
              raiting <= index
                ? 'card__raiting-star'
                : 'card__raiting-star  card__raiting-star--active'
            }
            onClick={(e) => {
              changeRaiting(Number(e.currentTarget.dataset.raiting));
            }}
          />
        ))}
    </div>
  );
};
