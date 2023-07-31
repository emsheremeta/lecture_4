import { Link, useLocation } from 'react-router-dom';
import {
  ModalWindowStyled,
  ModalTripInfo,
  Button,
  TotalPrice,
  CloseBtn,
} from './Modal.styled';
import NotFound from 'components/NotFound';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTrips } from 'redux/selectors';
import { addBooking } from 'redux/operations';
import { selectUser } from 'redux/auth/selectors';

ModalWindowStyled.setAppElement('#root');

export default function ModalWindow({ requestOnClose, isOpen, tripId }) {
  const trips = useSelector(getTrips);
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const [guestNum, setGuestNum] = useState(1);
  const [date, setDate] = useState('Date');
  const [allowBooking, setAllowBooking] = useState(false);

  const location = useLocation();
  const trip = trips.trips.items.filter(t => t.id === tripId)[0];
  if (!trip) {
    return <NotFound />;
  }
  const saveToLocalStr = () => {
    const booking = {
      tripId: tripId,
      userId: user.id,
      guests: guestNum,
      date: date,
    };
    dispatch(addBooking(booking));
    // alert('success');
  };

  const handleGuestNum = e => {
    setGuestNum(e.target.value);
  };
  const handleDate = e => {
    setDate(e.target.value);
    setAllowBooking(true);
  };

  return (
    <div>
      <ModalWindowStyled isOpen={isOpen}>
        <CloseBtn onClick={requestOnClose}>
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="1.5em"
            width="2em"
          >
            <path d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z" />
            <path d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
          </svg>
        </CloseBtn>
        <h1>{trip.title}</h1>
        <ModalTripInfo>
          <p>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path d="M2.494 18.913h3.52v-3.52c0-.43.35-.78.781-.78h3.52v-3.52c0-.432.35-.783.781-.783h3.52V6.791c0-.432.35-.782.782-.782h3.519V2.49c0-.432.35-.782.782-.782h3.52c.43 0 .781.35.781.782v20.724c0 .432-.35.782-.782.782H2.494a.782.782 0 01-.782-.782v-3.52c0-.43.35-.78.782-.78zM.172 15.928a.587.587 0 010-.83L15.102.168a.587.587 0 01.83.83l-14.93 14.93c-.23.23-.6.23-.83 0z" />
            </svg>
            LEVEL:
            {trip.level}
          </p>
          <p>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path d="M18 22H6v-6l4-4-4-4V2h12v6l-4 4 4 4M8 7.5l4 4 4-4V4H8m4 8.5l-4 4V20h8v-3.5M14 18h-4v-.8l2-2 2 2z" />
            </svg>
            DURATION: {trip.duration} days
          </p>
        </ModalTripInfo>
        <div>
          <p>Choose date</p>
          <select onChange={handleDate} defaultValue={date}>
            <option disabled={true}>Date</option>
            <option value="01/01/2024">01/01/2024</option>
            <option value="01/02/2024">01/02/2024</option>
            <option value="01/03/2024">01/03/2024</option>
            <option value="01/04/2024">01/04/2024</option>
            <option value="01/05/2024">01/05/2024</option>
            <option value="01/01/2024">01/06/2024</option>
          </select>
          <p>Number of guests</p>
          <select onChange={handleGuestNum} defaultValue={guestNum}>
            <option disabled={true}>Guests</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <TotalPrice>
          <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-3.5-6H14a.5.5 0 100-1h-4a2.5 2.5 0 110-5h1V6h2v2h2.5v2H10a.5.5 0 100 1h4a2.5 2.5 0 110 5h-1v2h-2v-2H8.5v-2z" />
          </svg>
          TOTAL PRICE: {trip.price * guestNum}$
        </TotalPrice>
        <Link to="/bookings" state={{ from: location }}>
          <Button disabled={!allowBooking} onClick={saveToLocalStr}>
            Book this trip
          </Button>
        </Link>
      </ModalWindowStyled>
    </div>
  );
}
