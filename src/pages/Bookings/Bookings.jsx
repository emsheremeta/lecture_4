import Header from 'pages/Header/Header';
import Footer from 'pages/Footer/Footer';
import Booking from '../../components/Booking';
import { NoBooking } from './Bookings.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBooking, fetchBookings } from 'redux/operations';
import { getBookings } from 'redux/selectors';
import { ToastContainer, toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';

export default function Bookings() {
  const dispatch = useDispatch();
  const bookings = useSelector(getBookings);
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchBookings());
  }, [dispatch]);

  useEffect(() => {
    if (location.state?.from) {
      toast.success('Trip added!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
  }, [location]);

  const deleteTrip = id => {
    dispatch(deleteBooking(id));
    toast.success('Trip deleted!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  };

  return (
    <div>
      <Header />
      <ToastContainer />
      {bookings?.length === 0 && (
        <NoBooking>Sorry, no bookings found</NoBooking>
      )}
      {bookings?.length > 0 && (
        <ul>
          {bookings.map(el => (
            <Booking key={el.id} data={el} deleteTrip={deleteTrip} />
          ))}
        </ul>
      )}
      <Footer />
    </div>
  );
}
