import React from 'react';
import MyBookedToursHero from './MyBookedToursHero/MyBookedToursHero'
import MyBookedToursBody from './MyBookedToursBody/MyBookedToursBody';

const MyBookedTours = () => {
  return (
    <div>
      <MyBookedToursHero></MyBookedToursHero>
      <MyBookedToursBody></MyBookedToursBody>
    </div>
  );
};

export default MyBookedTours;