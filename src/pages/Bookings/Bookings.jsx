import Header from 'pages/Header/Header';
import Footer from 'pages/Footer/Footer';
import Booking from '../../components/Booking';
import { NoBooking } from './Bookings.styled';
import { useState } from 'react';

export default function Bookings() {
  const [bookings, setBookings] = useState(
    JSON.parse(localStorage.getItem('BookingInfo'))
  );

  console.log(bookings);

  const deleteTrip = id => {
    console.log('delete trip', id);
    const newBookings = bookings.filter(e => e.id.toString() !== id);
    setBookings(newBookings);
    localStorage.setItem('BookingInfo', JSON.stringify(newBookings));
  };

  return (
    <div>
      <Header />
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
