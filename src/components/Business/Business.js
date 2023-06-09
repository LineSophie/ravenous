import React from 'react';
import './business.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot} from '@fortawesome/free-solid-svg-icons';
import { faFaceSmile} from '@fortawesome/free-regular-svg-icons';

function Business(props) {
 return (
    <div className="business-container">

<div className="top-image">
        <img src={props.image} alt="Business" className="business-image" />
        <div className="category-tag">{props.category}</div>
      </div>
       <h2>{props.name}</h2>

       <div className="address">
       <FontAwesomeIcon icon={faLocationDot} />
        <div className="address-info">
          <p>{props.address}, {props.city}, {props.state} {props.zipcode}</p>
        </div>
      </div>
      
        <div className="info">
         <FontAwesomeIcon icon={faFaceSmile} />
         <div className="address-info">
         <p>{props.rating} / {props.reviewCount} reviews</p>
         </div>
        </div>
      
    </div>
  );
}

export default Business;
