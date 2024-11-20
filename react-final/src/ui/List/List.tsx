import { FC, useState } from "react";
import { Link } from "react-router-dom";

import { Card } from "../Card/Card";
import { FilmSwiper } from "../Swiper/Swiper";
import { TMovieList } from "../../api/Movie";

import "./List.css";

interface IListProps {
  moviesList?: TMovieList;
  genresList?: string[];
  title?: string;
}

export const List: FC<IListProps> = ({ moviesList, genresList, title }) => {
  const [windowSize, setWindowSize] = useState(1440);

  window.addEventListener("resize", () => {
    setWindowSize(window.innerWidth);
  });

  return (
    <div className="list-container">
      {title && <h2 className="list__title">{title}</h2>}
      {moviesList &&
        (windowSize > 376 ? (
          <ul className="list list_movie">
            {moviesList.map((movie) => (
              <li className="list__item-movie" key={crypto.randomUUID()}>
                <Link to={`/movie/${movie.id}`}>
                  <Card variant="movie" movie={movie} />
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <FilmSwiper />
        ))}
      {genresList && (
        <ul className="list list_genres">
          {genresList.map((genre) => (
            <li className="list__item-genre" key={crypto.randomUUID()}>
              <Link to={`/movie?genre=${genre}`}>
                <Card variant="genre" genre={genre} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
