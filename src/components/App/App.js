import React, { useState } from 'react';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../utils/Yelp';
import styles from './App.module.css';


const App = () => {

  const [businesses, setBusinesses] = useState([]);

  const searchYelp = async (term, location, sortBy) => {
    const businesses = await Yelp.search(term, location, sortBy);
    setBusinesses(businesses);
  };

  return (
    <div className={styles.App}>
      <h1 className={styles.AppHeader}>ravenous</h1>

      <div className={styles.backgroundImg}>
        <div className={styles.overlayImg}>
          <SearchBar searchYelp={searchYelp} />
        </div>
      </div>

      {businesses && businesses.length === 0 ? (
        <div>{/*Handle initial state*/}</div>
      ) : (
        <BusinessList businesses={businesses} />
      )}
    </div>
  );
};

export default App;