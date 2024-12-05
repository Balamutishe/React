import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Card } from '../Card/Card';
import { TMovieList } from '../../api/Movie';

import 'swiper/css';
import './Swiper.css';

interface FilmSwiperProps {
  title: string;
  data: TMovieList;
}

export const FilmSwiper: FC<FilmSwiperProps> = ({ title, data }) => {
  return (
    <>
      <h2 className="swiper-title">{title}</h2>
      <Swiper height={336} spaceBetween={50} slidesPerView={1.4}>
        {data.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <Card variant="movie" movie={movie} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
