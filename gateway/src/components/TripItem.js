import React from 'react';
import StarIcon from '@mui/icons-material/Star';


const TripItem = (props) => {

  const {numberOfTrips, name, image, location, rating, review, price} = props;

  return (
    <div className="trip-box">
      <div className="trip-box-inner">
        <div className="trip-box-front">
          <p className="trip-box-days">{numberOfTrips} Day Trip</p>
          <div style={{ backgroundImage: `url(${image})` }}></div>
            <h1>{name}</h1>
            <h2>{location}</h2>
            <div className="trip-box-rating">
              <p><StarIcon/>{rating}</p>
              <p>{review} reviews</p>
            </div>
            <p className="trip-box-price"> ${price} / night</p>
        </div>
        <div className="trip-box-back">
          <h1>Amentites</h1>
          <h2>What this trip offers</h2>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          <button className="trip-item-book">Book now!</button>
        </div>
      </div>
    </div>
  )
}

export default TripItem;