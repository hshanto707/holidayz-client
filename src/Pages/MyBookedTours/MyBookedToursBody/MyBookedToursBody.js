import useCartData from "../../../hooks/useCartData";
import useCart from './../../../hooks/useCart';
import "./MyBookedToursBody.css";
import { useState } from 'react';
import { useEffect } from 'react';
import useFirebase from './../../../hooks/useFirebase';
import MyBookedTour from './../MyBookedTour/MyBookedTour';

const MyBookedToursBody = () => {
  const { user } = useFirebase();
  const { uid } = user;
  const [myBookings, setMyBookings] = useState([]);
  useEffect(() => {
    fetch(`https://holidayz-hhs.herokuapp.com/cart/${uid}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length) {
          setMyBookings(data);
        }
      });
  }, [uid, myBookings]);

  return (
    <div className="container mb-5">
      <div className="all-tour">
        {myBookings.map((myBooking) => (
          <MyBookedTour myBooking={myBooking} key={myBooking._id}></MyBookedTour>
        ))}
      </div>
    </div>
  );
};

export default MyBookedToursBody;
