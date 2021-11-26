import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './FeaturedProgram.css'

const FeaturedProgram = () => {
  // const [programs, setPrograms] = useState([]);

  // useEffect(() => {
  //   fetch("./programs.json")
  //     .then((res) => res.json())
  //     .then((data) => setPrograms(data));
  // }, []);
  return (
    <div className="container trainers-container">
      <h1 className="fw-bold mb-5">Featured Programs</h1>
      <div className="container all-programs">
        {/* {programs.slice(0, 6).map((program) => (
          <Program program={program} key={program.id}></Program>
        ))} */}
      </div>
      <NavLink to="/programs">
        <Button className="see-more">
          See More
          <FontAwesomeIcon className="ms-2" icon={faChevronRight} />
        </Button>
      </NavLink>
    </div>
  );
};

export default FeaturedProgram;
