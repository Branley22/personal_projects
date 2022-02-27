import React from 'react';
import { TripList } from '../helpers/TripList';
import TripItem from '../components/TripItem';
import '../styles/Trips.css';

const Trips = (props) => {

  return (
    <div className="trip">
      <h1 className="trip-title">Our Trips</h1>
      <div className="trip-list">
        {TripList.map((tripItem, key) => {
          return (
            <TripItem 
              key={key}
              image={tripItem.image} 
              name={tripItem.name} 
              price={tripItem.price}
              button={tripItem.button} 
            />
          );
        })}
      </div> 
    </div>
  )
}

export default Trips;

