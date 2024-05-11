import { useCardList } from './useCardList';

export const useFilterData = (value: string) => {
  const cardList = useCardList();

  const filterList = cardList.data?.filter((item) =>
    item.name.toLowerCase().includes(value.toLowerCase())
  );

  if (filterList) {
    return filterList;
  } else {
    return cardList.data;
  }
};
