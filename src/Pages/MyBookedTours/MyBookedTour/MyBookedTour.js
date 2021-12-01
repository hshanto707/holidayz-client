import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import useFirebase from "../../../hooks/useFirebase";
import "./MyBookedTour.css";
import useCart from "../../../hooks/useCart";

const MyBookedTour = ({ myBooking }) => {
  const { user } = useFirebase();
  const { remove } = useCart();
  const { uid } = user;
  const { _id, city, country, img, description, duration, age, price } =
    myBooking;

  return (
    // <div className="booked-product d-flex flex-column">
    //   <img className="booked-tour-img" src={img} alt="" />
    //   <div className="mx-3">
    //     <h3 className="tour-name fw-bolder fs-1 mt-3">
    //       {city}, {country}
    //     </h3>
    //     <p className="details mt-3">{description.slice(0, 150)}...</p>
    //     <h5 className="price fw-normal mb-3">Price: ${price}</h5>
    //   </div>

    //   <button onClick={() => remove(_id)} className="buy-now mb-4">
    //     Remove
    //   </button>
    // </div>

    <div className="d-flex">
      <div>
        <img className="booked-tour-img" src={img} alt="" />
      </div>
      <div className="text-start ms-4">
        <h3 className="tour-name fw-bolder fs-1 mt-3">
          {city}, {country}
        </h3>
        <p className="details mt-3">{description.slice(0, 150)}...</p>
        <h5 className="price fw-normal mb-3">Price: ${price}</h5>
        <button onClick={() => remove(_id)} className="login text-white mb-4">
          Remove
        </button>
      </div>
    </div>
  );
};

export default MyBookedTour;
