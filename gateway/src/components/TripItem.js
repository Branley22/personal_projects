import React from 'react';

const TripItem = (props) => {

  const {image, name, price} = props;

  return (
    <div className="trip-box">
      <div className="trip-box-inner">
        <div className="trip-box-front">
          <div style={{ backgroundImage: `url(${image})` }}></div>
            <h1>{name}</h1>
            <p>${price}</p>
        </div>
        {/* <button className="trip-item-book">Book now!</button> */}
        <div className="trip-box-back">
          <p>This is the back.</p>
        </div>
      </div>
    </div>
  )
}

export default TripItem;