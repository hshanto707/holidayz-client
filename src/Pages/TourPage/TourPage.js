import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";
import "./TourPage.css";

const TourPage = () => {
  return (
    <div>
      {/* HEADER */}

      <div className="tour-hero">
        <div className="tour-hero-bg">
          <img
            src="https://www.umultirank.org/export/sites/default/.galleries/generic-images/Others/Winter-Calendar/architecture-4529605_1280.jpg_1729757344.jpg"
            alt=""
            className="tour-background"
          />
        </div>
        <div className="tour-hero-title">
          <h1 className="tour-caption mb-sm-3">Rome</h1>
          <h1 className="tour-caption mb-sm-3">Italy</h1>
        </div>
      </div>

      {/* DETAILS */}

      <div className="container details-container my-5">
        <div className="text-start">
          <h2>Rome, Italy</h2>
          <p className="details">
            Rome was called the “Eternal City” by the ancient Romans because
            they believed that no matter what happened in the rest of the world,
            the city of Rome would always remain standing. Exploring the city
            centre by foot surrounded by glorious monuments and colossal remains
            takes you back in time to the “glory that was Rome”. With its
            unparalleled history, Rome is the third most visited city in Europe
            and the fourteenth worldwide. It attracts visitors from all over the
            world who are impatient to discover the city’s impressive monuments
            and archaeological sites; not to mention its renowned cuisine and
            its lively atmosphere. When exploring the Colosseum, visitors will
            easily imagine how the gladiators fought for their life in the
            arena, cheered by the crowd. In the Circus Maximus, travelers will
            picture the chariots crashing into each other in order to be first
            in the race, and in the Roman Forum visualise what the Roman public
            life was like.
          </p>
        </div>
        <div className="ms-5">
          <div className="d-flex text-start ms-auto info-container">
            <div>
              <h3>Price:</h3>
              <p className="details">Destination:</p>
              <p className="details">Duration:</p>
              <p className="details">Age:</p>
            </div>
            <div className="ms-3 text-end">
              <h3>
                $350 <small className="fs-5">/ Person</small>
              </h3>
              <p className="details">Rome, Italy</p>
              <p className="details">10 days</p>
              <p className="details">16+</p>
            </div>
          </div>
          <Button className="login w-100">Book Now<FontAwesomeIcon icon={faArrowRight} className=" ms-2" /></Button>
        </div>
      </div>

      
    </div>
  );
};

export default TourPage;
