import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import WifiIcon from '@mui/icons-material/Wifi';
import ShowerIcon from '@mui/icons-material/Shower';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { Link } from 'react-router-dom';


const TripItem = (props) => {

  const {numberOfTrips, name, image, location, rating, review, price} = props;

  return (
    <div className="trip-box">
      <div className="trip-box-inner">
        <div className="trip-box-front">
          <p className="trip-box-days">{numberOfTrips} Day Trip</p>
          <div style={{ backgroundImage: `url(${image})`, backgroundPosition:"bottom" }}></div>
            <h1>{name}</h1>
            <h2>{location}<LocationOnIcon/></h2>
            <div className="trip-box-rating">
              <p><StarIcon/>{rating}</p>
            </div>
            <p className="trip-box-price"> ${price} / night</p>
        </div>
        <div className="trip-box-back">
          <p className="trip-box-review">
            <Link to="/stories">{review} reviews</Link>
          </p>
          <h1>Amentites</h1>
          <h2>What this trip offers</h2>
          <div className="trip-amentites">
            <li>Food Included / Room Services<RestaurantIcon/></li>
            <li>Wifi<WifiIcon/></li>
            <li>Shower & Bath<ShowerIcon/></li>
            <li>Discounted Taxi Services<LocalTaxiIcon/></li>
            <li>Air Conditioning<AcUnitIcon/></li>
            <button className="amentites-button">Show all 32 amenities</button>
            <button className="trip-item-book">Book now!</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TripItem;