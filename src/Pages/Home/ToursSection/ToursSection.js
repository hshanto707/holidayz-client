import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Tour from '../../Tours/Tour/Tour';
import useTourData from '../../../hooks/useTourData';
import './ToursSection.css'

const ToursSection = () => {
  const [tours] = useTourData();

  return (
    <div className="container section-container">
      <h1 className="fw-bold mb-3">Our Popular Tours</h1>
      <div className="tour-section">
        {tours.slice(0, 6).map((tour) => (
          <Tour tour={tour} key={tour._id}></Tour>
        ))}
      </div>
      <NavLink to="/tours">
        <Button className="see-more">See All</Button>
      </NavLink>
    </div>
  );
};

export default ToursSection;