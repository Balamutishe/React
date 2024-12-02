import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Card } from '../Card/Card';
import { useQueryTopListFilms } from '../../hooks/useQueryTopListFilms';

import 'swiper/css';
import './Swiper.css';

interface FilmSwiperProps {
  title: string;
}

export const FilmSwiper: FC<FilmSwiperProps> = ({ title }) => {
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
        <>
          <h2 className="swiper-title">{title}</h2>
          <Swiper height={336} spaceBetween={50} slidesPerView={1.4}>
            {TopListFilms.data.map((movie) => (
              <SwiperSlide key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                  <Card variant="movie" movie={movie} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      );
  }
};
