import { BookingWrapper, Button } from 'pages/Bookings/Bookings.styled';

export default function Booking({ data, deleteTrip }) {
  const handleDelete = e => {
    deleteTrip(e.target.id);
  };

  return (
    <BookingWrapper>
      <h2>{data.title}</h2>
      <p>GUEST NUMBER: {data.guestNumber}</p>
      <p>DATE: {data.date}</p>
      <p>PRICE:{data.price}$</p>
      <Button onClick={handleDelete} id={data.id}>
        Delete Trip
      </Button>
    </BookingWrapper>
  );
}
