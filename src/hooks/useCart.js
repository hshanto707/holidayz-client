import { useEffect, useState } from "react";
import useFirebase from "./useFirebase";

const useCart = () => {
  const { user } = useFirebase();
  const { uid } = user;
  const [bookedTour, setBookedTour] = useState([]);
  const [myBookedTour, setMyBookedTour] = useState([]);

  useEffect(() => {
    fetch("https://holidayz-hhs.herokuapp.com/cart")
      .then((res) => res.json())
      .then((data) => {
        if (data.length) {
          setBookedTour(data);
        }
      });
  }, [bookedTour]);

  // ADDING TO CART

  function addToCart(tour) {
    delete tour._id;
    tour.email = user?.email;
    tour.uid = uid;
    tour.status = "pending";

    fetch("https://holidayz-hhs.herokuapp.com/cart", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(tour),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          const newBooked = [...bookedTour, tour];
          setBookedTour(newBooked);
        }
      });
  }

  // REMOVE FROM CART

  const remove = (id) => {
    const confirm = window.confirm("Do you want cancel this tour?");
    if (confirm) {
      fetch(`https://holidayz-hhs.herokuapp.com/delete/${id}`, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          const newBookings = bookedTour.filter((tour) => tour._id !== id);
          setBookedTour(newBookings);
        });
    }
  };

  return { bookedTour, setBookedTour, remove, addToCart };
};

export default useCart;
