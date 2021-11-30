import { useEffect } from "react";
import { useState } from "react";

const useCartData = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetch("https://holidayz-hhs.herokuapp.com/cart")
      .then((res) => res.json())
      .then((data) => setTours(data))
      .catch((err) => console.log(err));
  }, []);

  return [tours, setTours];
};

export default useCartData;
