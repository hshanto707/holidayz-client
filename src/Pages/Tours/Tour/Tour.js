import React from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import "./Tour.css";
import useFirebase from "../../../hooks/useFirebase";

const Tour = ({tour}) => {
  const { _id, city, country, img, description, duration, age, price } = tour;

  

  return (
    <div className="product d-flex flex-column">
      <img className="tour-img" src={img} alt="" />
      <div className="mx-3">
        <h3 className="tour-name fw-bolder fs-1 mt-3">
          {city}, {country}
        </h3>
        <p className="details mt-3">{description.slice(0, 150)}...</p>
        <h5 className="price fw-normal mb-3">Price: ${price}</h5>
      </div>
      <NavLink className="mt-auto" to={`/tour/${_id}`}>
        <Button className="cta login mb-4">Book Now</Button>
      </NavLink>
    </div>
  );
};

export default Tour;
