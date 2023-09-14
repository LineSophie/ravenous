/*
 This component is responsible for rendering a list of businesses.
 It receives a prop called "businesses," which is an array of business objects.
 If the "businesses" array is undefined or null, it handles this case by returning nothing (null).
 For each defined business in the array, it renders the "Business" component, passing the business data as a prop.
*/

import React from 'react';
import Business from '../Business/Business';
import styles from './BusinessList.module.css';


const BusinessList = ({ businesses }) => {
  if (!businesses) {
    return null; // Handle the case when businesses is undefined or null
  }

  return (
    <div className={styles.BusinessList}>
      {businesses.map((business) => {
        return <Business business={business} key={business.id} />;
      })}
    </div>
  );
};

export default BusinessList;