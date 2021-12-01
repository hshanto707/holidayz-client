import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./TourPage.css";
import useFirebase from './../../hooks/useFirebase';
import useAuth from './../../hooks/useAuth';

const TourPage = () => {
  const { id } = useParams();
  const [tours, setTours] = useState([]);
  const { user } = useFirebase();
  const { uid } = user;
  const { addToCart, AllContexts } = useAuth();

  const history = useHistory();

  useEffect(() => {
    fetch(`https://holidayz-hhs.herokuapp.com/tours/${id}`)
      .then((res) => res.json())
      .then((data) => setTours(data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      {/* HEADER */}

      <div className="tour-hero">
        <div className="tour-hero-bg">
          <img
            src={tours.img}
            alt=""
            className="tour-background"
          />
        </div>
        <div className="tour-hero-title">
          <h1 className="tour-caption mb-sm-3">{tours.city}</h1>
          <h1 className="tour-caption mb-sm-3">{tours.country}</h1>
        </div>
      </div>

      {/* DETAILS */}

      <div className="container details-container my-5">
        <div className="text-start">
          <h2>{tours.city}, {tours.country}</h2>
          <p className="details">{tours.description}</p>
        </div>
        <div className="ms-5">
          <div className="d-flex text-start ms-auto info-container">
            <div>
              <p className="fw-bold details">Price:</p>
              <p className="details">Destination:</p>
              <p className="details">Duration:</p>
              <p className="details">Age:</p>
            </div>
            <div className="ms-3 text-end">
              <p className="fw-bold details">
                ${tours.price} / Person
              </p>
              <p className="details">{tours.city}, {tours.country}</p>
              <p className="details">{tours.duration}</p>
              <p className="details">{tours.age}</p>
            </div>
          </div>

          <button
          onClick={() => addToCart(tours)}
          className="login text-white w-100"
        >
          Book Now
          <FontAwesomeIcon icon={faArrowRight} className=" ms-2" />
        </button>
        </div>
      </div>

      
    </div>
  );
};

export default TourPage;
