import React from 'react';

const TripItem = (props) => {

  const {image, name, price} = props;

  return (
    <div className="trip-item">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <p>{price}</p>
    </div>
  )
}

export default TripItem;