import { z } from 'zod';
import { validateResponse } from './validateResponse';

const URL = `https://cinemaguide.skillbox.cc`;

const MovieShema = z.object({
  keywords: z.array(z.string()),
  backdropUrl: z.string(),
  production: z.string(),
  trailerYoutubeId: z.string(),
  language: z.string(),
  tmdbRating: z.number(),
  title: z.string(),
  cast: z.array(z.string()),
  revenue: z.string(),
  posterUrl: z.string(),
  plot: z.string(),
  genres: z.array(z.string()),
  id: z.number(),
  budget: z.string(),
  languages: z.array(z.string()),
  releaseDate: z.string(),
  director: z.string(),
  awardsSummary: z.string(),
  runtime: z.number(),
  trailerUrl: z.string(),
  relaseYear: z.number(),
  countriesOfOrigin: z.array(z.string()),
  originalTitle: z.string(),
  searchL: z.string(),
  homepage: z.string(),
  status: z.string(),
});

export type TMovie = z.infer<typeof MovieShema>;

export const MovieListShema = z.array(MovieShema);

export type TMovieList = z.infer<typeof MovieListShema>;

export function fetchFilm(id: number): Promise<TMovie> {
  return fetch(`${URL}/movie/${id}`, {
    method: 'GET',
    credentials: 'include',
  })
    .then(validateResponse)
    .then((response) => response.json());
}

export function fetchListFilms(): Promise<TMovieList> {
  return fetch(`${URL}/movie`, {
    method: 'GET',
    credentials: 'include',
  })
    .then(validateResponse)
    .then((response) => response.json());
}

export function fetchRandomFilm(): Promise<TMovie> {
  return fetch(`${URL}/movie/random`, {
    method: 'GET',
    credentials: 'include',
  })
    .then(validateResponse)
    .then((response) => response.json());
}

export function fetchListTopFilms(): Promise<TMovieList> {
  return fetch(`${URL}/movie/top10`, {
    method: 'GET',
    credentials: 'include',
  })
    .then(validateResponse)
    .then((response) => response.json());
}

export function fetchListFavoritesFilms() {
  return fetch(`${URL}/favorites`, {
    method: 'GET',
    credentials: 'include',
  })
    .then(validateResponse)
    .then((response) => response.json());
}