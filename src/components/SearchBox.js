import React from 'react';

import SearchIcon from '../images/icons/search-icon.svg';
import FilterIcon from '../images/icons/filter-icon.svg';

function SearchBox() {
  return (
    <div className='flex gap-2 items-center'>
        <div>
            <img src={SearchIcon} alt="search"/>
        </div>
        <input placeholder='Search here....' type="text" id="search-term" className='flex-1 text-xs px-2 py-1'/>
        <div>
            <img src={FilterIcon} alt="filter"/>
        </div>
        <div className='font-medium text-sm'>Filters</div>
    </div>
  )
}

export default SearchBox