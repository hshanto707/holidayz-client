import React from 'react';
import AllBookedToursHeroBody from './AllBookedToursBody/AllBookedToursBody';
import AllBookedToursHeroHero from './AllBookedToursHero/AllBookedToursHero';

const AllBookings = () => {
  return (
    <div>
      <AllBookedToursHeroHero></AllBookedToursHeroHero>
      <AllBookedToursHeroBody></AllBookedToursHeroBody>
    </div>
  );
};

export default AllBookings;