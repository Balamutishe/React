import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Card } from '../Card/Card';
import { useQueryTopListFilms } from '../../hooks/useQueryTopListFilms';

import 'swiper/css';

export const FilmSwiper = () => {
  const TopListFilms = useQueryTopListFilms();

  switch (TopListFilms.status) {
    case 'error':
      return (
        <div>
          <span>Произошла ошибка :(</span>
          <button onClick={() => TopListFilms.refetch()}>
            Повторить запрос
          </button>
        </div>
      );
    case 'success':
      return (
        <Swiper height={336} spaceBetween={50} slidesPerView={1.4}>
          {TopListFilms.data.map((movie) => (
            <SwiperSlide>
              <Link to={`/movie/${movie.id}`}>
                <Card variant='movie' movie={movie} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      );
  }
};
