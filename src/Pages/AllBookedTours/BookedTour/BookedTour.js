import React from "react";
import useAuth from "../../../hooks/useAuth";
import useFirebase from "../../../hooks/useFirebase";
import "./BookedTour.css";
import useCart from "../../../hooks/useCart";

const BookedTour = ({ tour }) => {
  const { user } = useFirebase();
  const { remove } = useCart();
  const { uid } = user;
  const { _id, city, country, img, description, duration, age, price } = tour;

  return (
    <div className="d-flex">
      <div>
        <img className="booked-tour-img" src={img} alt="" />
      </div>
      <div className="text-start ms-4">
        <h3 className="tour-name fw-bolder fs-1 mt-3">{city}, {country}</h3>
        <p className="details mt-3">{description.slice(0, 150)}...</p>
        <h5 className="price fw-normal mb-3">Price: ${price}</h5>
      </div>
    </div>
  );
};

export default BookedTour;
