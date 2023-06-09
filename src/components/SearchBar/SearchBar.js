import React, { useState } from 'react';
import './SearchBar.css'

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};


function SearchBar() {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    // 
  };

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue}>{sortByOption}</li>;
    });
  };

  return (
  <div className="search-bar">

    <div className='SearchBarSortOption'>
      <ul>{renderSortByOptions()}</ul>
    </div>

    <input
      type="text"
      placeholder="Search Businesses..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />

    <input
      type="text"
      placeholder="Where?"
      value={location}
      onChange={(e) => setLocation(e.target.value)}
      />

      <br />
      <br />

      <button className='search-btn' onClick={handleSearch}>Let's Go</button>
      
  </div>
  );
}

export default SearchBar;
