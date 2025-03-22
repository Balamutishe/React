import { FC } from 'react';
import { Loader } from '../Loader';
import { CardList } from './CardList';
import { useCardList } from '../../hooks/useCardList';
import { useFilterData } from '../../hooks/useFilterData';

interface RenderCardListProps {
  searchValue: string;
}

export const RenderCardList: FC<RenderCardListProps> = ({ searchValue }) => {
  const queryData = useCardList();
  const list = useFilterData(searchValue);

  switch (queryData.status) {
    case 'pending':
      return <Loader />;
    case 'success':
      return <CardList restaurantsList={list} />;
    case 'error':
      return (
        <div>
          <span>Произошла ошибка</span>
          <button onClick={() => queryData.refetch()}>Повторить запрос</button>
        </div>
      );
  }
};
