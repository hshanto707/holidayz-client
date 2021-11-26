import { useEffect } from "react";
import { useState } from "react";

const useTourData = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tours")
      .then((res) => res.json())
      .then((data) => setTours(data))
      .catch((err) => console.log(err));
  }, []);

  return [tours, setTours];
};

export default useTourData;
