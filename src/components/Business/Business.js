/*
 This component displays information about a business listed on YELP.
 It takes a 'business' object as a prop and renders its image, category, name, address, rating,
 review count, and price.
 If the 'business.imageSrc' is missing, it falls back to a default image.
*/

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import styles from './Business.module.css';


const Business = ({ business }) => {

  const imageSrc = business.imageSrc || require('../../images/businesses-default-img/nerfee-mirandilla-o1EDsUFmuXQ-unsplash.jpg');

  return (
    <div className={styles.businessContainer}>

      <div className={styles.topImg}>
        <img src={imageSrc} alt="Business" className={styles.businessImg} />
        <div className={styles.categoryTag}>{business.category} {business.price}</div>
      </div>


      <h2>{business.name}</h2>

      <div className={styles.address}>
        <FontAwesomeIcon icon={faLocationDot} />
        <div className={styles.addressInfo}>
          <p>{`${business.address}, ${business.city}, ${business.state}, ${business.zipCode}`}</p>
        </div>
      </div>

      <div className={styles.rating}>
        <FontAwesomeIcon icon={faFaceSmile}/>
        <div className={styles.ratingInfo}>
          <p>{business.rating} / {business.reviewCount} </p>
        </div>
        
      </div>

    </div>
  );
};

export default Business;