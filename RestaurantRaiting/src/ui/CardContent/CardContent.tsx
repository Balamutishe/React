import { useState } from 'react';
import { RenderCardList } from '../CardList/RenderCardList';

export const CardContent = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className='card-content'>
      <div className='search-container'>
        <input
          className='search-input'
          placeholder='Search for restaurants'
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </div>
      <RenderCardList searchValue={searchValue} />
    </div>
  );
};
