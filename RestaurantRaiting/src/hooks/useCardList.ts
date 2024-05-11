import { useQuery } from '@tanstack/react-query';
import { queryClient } from '../api/queryClient';
import { getRestaurants } from '../api/api';

export const useCardList = () => {
  const cardListQuery = useQuery(
    {
      queryFn: () => getRestaurants(),
      queryKey: ['restaurants'],
    },
    queryClient
  );

  return cardListQuery;
};
