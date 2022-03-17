import React from 'react';
import { TripList } from '../helpers/TripList';
import TripItem from '../components/TripItem';
import '../styles/Trips.css';

const Trips = (props) => {

  return (
    <div className="trip">
      <h1 className="trip-title">Top Picks</h1>
      <div className="trip-list">
        {TripList.map((tripItem, key) => {
          return (
            <TripItem 
              key={key}
              numberOfTrips={tripItem.numberOfTrips}
              name={tripItem.name} 
              image={tripItem.image}
              location={tripItem.location}
              rating={tripItem.rating}
              review={tripItem.review}
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

