import React from 'react';
import './index.css';

const SearchBar = ({ onFindChange }) => {
  const searchText = 'Type here to search';

  return (
    <div className='app-search-panel'>
      <input
        placeholder={searchText}
        onChange={e => onFindChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
