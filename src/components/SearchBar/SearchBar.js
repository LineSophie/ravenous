/*
 This component provides a search interface for users to search for local restaurants.
 It allows users to input search terms, locations, and select sorting options.
 When a search is initiated, it calls the 'searchYelp' function, as defined in utils/Yelp.
*/

import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const sortByOptions = {
  'Highest Rated': 'rating',
  'Best Match': 'best_match',
  'Most Reviewed': 'review_count',
};

const SearchBar = ({ searchYelp }) => {

  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState('best_match');

  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const sortHandler = (sortByOption) => {
    setSortBy(sortByOption);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    searchYelp(term, location, sortBy);
  };

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li
          key={sortByOptionValue}
          className={sortBy === sortByOptionValue ? styles.activeTag : ''}
          onClick={() => sortHandler(sortByOptionValue)}
        >
          {sortByOption}
        </li>
      );
    });
  };

  return (
    <div className={styles.SearchBar}>
      <div className={styles.SearchBarSortOption}>
        <ul>{renderSortByOptions()}</ul>
      </div>

      <form onSubmit={handleSearch}>
        <input
          id="search-business"
          type="text"
          placeholder="Search Restaurants..."
          onChange={handleTermChange}
        />

        <input
          id="search-location"
          type="text"
          placeholder="Where?"
          onChange={handleLocationChange}
        /> 

        <br />
        <br />

        <button className={styles.searchBtn} type="submit">
          Let's Go!
        </button>
      </form>
    </div>
  );
};

export default SearchBar;