import React, { useEffect, useState } from "react";
import Tour from "../Tour/Tour";
import useTourData from '../../../hooks/useTourData';
import "./ToursBody.css";

const ToursBody = () => {
  const [tours] = useTourData();

  return (
    <div className="container mb-5">
      <div className="tour-section">
        {tours.map((tour) => (
          <Tour tour={tour} key={tour._id}></Tour>
        ))}
      </div>
    </div>
  );
};

export default ToursBody;
