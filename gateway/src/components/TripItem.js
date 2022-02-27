import React from 'react';
import StarIcon from '@mui/icons-material/Star';


const TripItem = (props) => {

  const {numberOfTrips, name, image, location, rating, review, price} = props;

  return (
    <div className="trip-box">
      <div className="trip-box-inner">
        <div className="trip-box-front">
          <p className="trip-box-days">{numberOfTrips}</p>
          <div style={{ backgroundImage: `url(${image})` }}></div>
            <h1>{name}</h1>
            <h2>{location}</h2>
            <div className="trip-box-rating">
              <p><StarIcon/>{rating}</p>
              <p>{review} reviews</p>
            </div>
            <p className="trip-box-price"> ONLY ${price}</p>
        </div>
        <div className="trip-box-back">
          <p>This is the back.</p>
          <button className="trip-item-book">Book now!</button>
        </div>
      </div>
    </div>
  )
}

export default TripItem;