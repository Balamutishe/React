import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { fetchFilm } from '../../api/Movie';
import { PreviewFilm } from '../../ui/Preview/PreviewFilm';
import { queryClient } from '../../api/queryClient';

import './FilmPage.css';
import { useEffect } from 'react';

export const FilmPage = () => {
  const { movieId } = useParams();
  const queryFilm = useQuery(
    {
      queryKey: ['film', 'id'],
      queryFn: () => fetchFilm(Number(movieId)),
    },
    queryClient
  );

  useEffect(() => {
    queryFilm.refetch();
  }, [queryFilm]);

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
          <PreviewFilm data={queryFilm.data} refetch={queryFilm.refetch} />
          <div className='film-about'>
            <h3 className='film-about__title'>О фильме</h3>
            <div className='film-about__desc'>
              <div className='film-about__desc_item'>
                <div>Язык оригинала</div>
                <div>{queryFilm.data.language}</div>
              </div>
              <div className='film-about__desc_item'>
                <div>Бюджет</div>
                <div>{queryFilm.data.budget}</div>
              </div>
              <div className='film-about__desc_item'>
                <div>Выручка</div>
                <div>{queryFilm.data.revenue}</div>
              </div>
              <div className='film-about__desc_item'>
                <div>Режиссёр</div>
                <div>{queryFilm.data.director}</div>
              </div>
              <div className='film-about__desc_item'>
                <div>Продакшен</div>
                <div>{queryFilm.data.production}</div>
              </div>
              <div className='film-about__desc_item'>
                <div>Награды</div>
                <div>{queryFilm.data.awardsSummary}</div>
              </div>
            </div>
          </div>
        </div>
      );
  }
};
