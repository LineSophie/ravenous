import React from 'react';
import Business from '../Business/Business';
import './BusinessList.css';

function BusinessList(props) {
    return (
      <div className="BusinessList">
        {props.businesses.map(business => (
          <Business
            image={business.image}
            name={business.name}
            address={business.address}
            city={business.city}
            state={business.state}
            zipcode={business.zipcode}
            category={business.category}
            rating={business.rating}
            reviewCount={business.reviewcount}
          />
        ))}
      </div>
    );
  }

// Export Data 
export default BusinessList;
