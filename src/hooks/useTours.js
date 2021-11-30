  import { useState } from "react";
import { useEffect } from "react";

const useTours = () => {
  const [tours, setTours] = useState([]);
  useEffect(() => {
    fetch(`https://holidayz-hhs.herokuapp.com/cart`)
      .then((res) => res.json())
      .then((data) => setTours(data));
  }, []);
  return { tours, setTours };
};

export default useTours;