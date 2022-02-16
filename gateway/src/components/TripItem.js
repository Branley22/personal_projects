import React from 'react';

const TripItem = (props) => {

  const {image, name, price} = props;

  return (
    <div className="trip-box">
      <div className="trip-box-inner">
        <div style={{ backgroundImage: `url(${image})` }}></div>
          <h1>{name}</h1>
          <p>${price}</p>
          <button className="trip-item-book">Book now!</button>
        <div className="trip-box-back">
          <p>This is the back.</p>
        </div>
      </div>
    </div>
  )
}

export default TripItem;