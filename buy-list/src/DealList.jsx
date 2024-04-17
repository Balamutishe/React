/* eslint-disable react/prop-types */
import './DealList.css';
import { DealItem } from './DealItem';

export const DealList = ({
  dealList,
  dealAdd,
  onDone,
  onDelete,
  filterDealList,
}) => {
  return (
    <ul className='deal-list'>
      {dealList.map((deal) => (
        <li className='deal-list__item' key={deal.id}>
          <DealItem
            dealAdd={dealAdd}
            deal={deal}
            onDone={onDone}
            onDelete={onDelete}
            filterDealList={filterDealList}
          />
        </li>
      ))}
    </ul>
  );
};
