import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { PreviewFilm } from '../../ui/Preview/PreviewFilm';
import { Modal } from '../../ui/Modal/Modal';
import { useQueryFilm } from '../../hooks/useQueryFilm';

import './FilmPage.css';

const FilmPage = () => {
  const { movieId } = useParams();
  const queryFilm = useQueryFilm(Number(movieId));

  useEffect(() => {
    if (queryFilm.data && Number(movieId) !== queryFilm.data.id) {
      queryFilm.refetch();
    }
  });

  const trailerUrl =
    queryFilm.status === 'success' ? queryFilm.data.trailerUrl : '';

  switch (queryFilm.status) {
    case 'error':
      return (
        <div>
          <span>Произошла ошибка :(</span>
          <button onClick={() => queryFilm.refetch()}>Повторить запрос</button>
        </div>
      );
    case 'success':
      return (
        <div>
          <Modal trailerUrl={trailerUrl} />

          <PreviewFilm
            data={queryFilm.data}
            refetch={queryFilm.refetch}
            variant="filmPage"
          />
          <div className="film-about">
            <h3 className="film-about__title">О фильме</h3>
            <div className="film-about__desc">
              <div className="film-about__desc_item">
                <div>Язык оригинала</div>
                <div>
                  {queryFilm.data.language !== null
                    ? queryFilm.data.language
                    : 'Нет данных'}
                </div>
              </div>
              <div className="film-about__desc_item">
                <div>Бюджет</div>
                <div>
                  {queryFilm.data.budget !== null
                    ? queryFilm.data.budget
                    : 'Нет данных'}
                </div>
              </div>
              <div className="film-about__desc_item">
                <div>Выручка</div>
                <div>
                  {queryFilm.data.revenue !== null
                    ? queryFilm.data.revenue
                    : 'Нет данных'}
                </div>
              </div>
              <div className="film-about__desc_item">
                <div>Режиссёр</div>
                <div>
                  {queryFilm.data.director !== null
                    ? queryFilm.data.director
                    : 'Нет данных'}
                </div>
              </div>
              <div className="film-about__desc_item">
                <div>Продакшен</div>
                <div>
                  {queryFilm.data.production !== null
                    ? queryFilm.data.production
                    : 'Нет данных'}
                </div>
              </div>
              <div className="film-about__desc_item">
                <div>Награды</div>
                <div>
                  {queryFilm.data.awardsSummary !== null
                    ? queryFilm.data.awardsSummary
                    : 'Нет данных'}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
};

export default FilmPage;
