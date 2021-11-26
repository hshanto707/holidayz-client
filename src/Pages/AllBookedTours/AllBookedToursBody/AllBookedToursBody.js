import BookedTour from "../BookedTour/BookedTour";
import useCartData from "../../../hooks/useCartData";
import "./AllBookedToursBody.css";
import useCart from './../../../hooks/useCart';

const AllBookedToursBody = () => {
  const { bookedTour } = useCart();

  return (
    <div className="container mb-5">
      <div className="all-booked-tour">
        {bookedTour.map((tour) => (
          <BookedTour tour={tour} key={tour._id}></BookedTour>
        ))}
      </div>
    </div>
  );
};

export default AllBookedToursBody;
