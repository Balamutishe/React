import { Link } from "react-router-dom";
import { FC } from "react";

import { TMovieList } from "../../api/Movie";
import { FilmRaiting } from "../FilmRaiting/FilmRaiting";

import "./DropdownList.css";

interface IDropdownList {
  filteredList: TMovieList;
  searchParamMovie: string;
}

export const DropdownList: FC<IDropdownList> = ({
  filteredList,
  searchParamMovie,
}) => {
  return (
    <div
      className={
        searchParamMovie === ""
          ? "dropdown dropdown_invisible"
          : "dropdown dropdown_visible"
      }
    >
      <ul className="dropdown__list">
        {filteredList.length !== 0
          ? filteredList.map((movie) => (
              <li key={movie.id} className="dropdown__list-item">
                <Link to={`/movie/${movie.id}`} className="dropdown__link">
                  <div className="movie-search">
                    <div className="movie-search__content_left">
                      <img src={movie.posterUrl} alt="#" />
                    </div>
                    <div className="movie-search__content_right">
                      <div className="movie-search__about">
                        <FilmRaiting
                          raiting={Number(movie.tmdbRating.toFixed(1))}
                        />
                        <span className="movie-search__relase-year">
                          {movie.releaseYear}
                        </span>
                        <span>
                          {movie.genres.map((genre, index) => (
                            <span className="movie-search__genre" key={index}>
                              {genre}
                            </span>
                          ))}
                        </span>
                        <span className="movie-runtime">
                          {movie.runtime} мин
                        </span>
                      </div>
                      <h2 className="movie-search__title">{movie.title}</h2>
                    </div>
                  </div>
                </Link>
              </li>
            ))
          : "Фильм не найден"}
      </ul>
    </div>
  );
};
