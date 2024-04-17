import { useState, useRef, useEffect } from 'react';
import './DealItem.css';

/* eslint-disable react/prop-types */
export const DealItem = ({
  dealAdd,
  deal,
  onDone,
  onDelete,
  filterDealList,
}) => {
  const [title, setTitle] = useState(deal.title);
  const dealContainer = useRef();
  const dealTitle = useRef();
  const dealInput = useRef();
  const dealCheckbox = useRef();
  const dealButton = useRef();

  useEffect(() => {
    if (dealInput.current.value === '') {
      dealInput.current.focus();
      dealInput.current.placeholder = 'Введите название дела';
    }

    if (deal.done) {
      dealContainer.current.className = 'deal deal--done';
      dealTitle.current.className = 'deal__title deal__title--done';
      dealCheckbox.current.checked = true;
      dealInput.current.className = 'deal__input-text deal__input-text--done';
      dealInput.current.disabled = true;
      dealButton.current.className = 'deal__button deal__button--done';
    } else {
      dealContainer.current.className = 'deal';
      dealTitle.current.className = 'deal__title';
      dealCheckbox.current.checked = false;
      dealInput.current.className = 'deal__input-text';
      dealInput.current.disabled = false;
      dealButton.current.className = 'deal__button';
    }

    dealInput.current.onblur = () => {
      filterDealList();
    };
  });

  const changeTitle = () => {
    setTitle(dealInput.current.value);
    dealAdd(deal, dealInput.current);
  };

  const dealDone = () => {
    onDone(deal);
  };

  const dealDelete = () => {
    onDelete(deal.id);
  };

  return (
    <div ref={dealContainer} className='deal'>
      <div ref={dealTitle} className='deal__title'>
        <input
          ref={dealCheckbox}
          className='deal__input-checkbox'
          name='dealCheckbox'
          type='checkbox'
          onChange={dealDone}
        />
        <input
          ref={dealInput}
          className='deal__input-text'
          id={deal.id}
          name='dealText'
          type='text'
          value={title}
          onChange={changeTitle}
        />
      </div>
      <button ref={dealButton} className='deal__button' onClick={dealDelete}>
        Удалить дело
      </button>
    </div>
  );
};
