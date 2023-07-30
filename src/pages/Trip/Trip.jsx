import { useParams } from 'react-router-dom';
import { useState } from 'react';
import trips from '../../trips.json';
import {
  Image,
  Wrapper,
  TripInfo,
  TripPrice,
  TripDesc,
  Button,
} from './Trip.styled';
import Header from 'pages/Header/Header';
import Footer from 'pages/Footer/Footer';
import ModalWindow from 'pages/Modal/Modal';
import NotFound from 'components/NotFound';

export default function Trip() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { tripId } = useParams();
  const trip = trips.filter(t => t.id === tripId)[0];

  if (!trip) {
    return <NotFound />;
  }
  //modal

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <Header />
      <Wrapper>
        <Image src={trip.image} alt="tripPhoto" />
        <div>
          <h1>{trip?.title}</h1>
          <TripInfo>LEVEL: {trip.level}</TripInfo>
          <TripInfo>DURATION: {trip.duration}</TripInfo>
          <TripDesc>{trip?.description}</TripDesc>
          <TripPrice>PRICE: {trip.price}$/person</TripPrice>
          <Button onClick={openModal}>Book a trip</Button>
          <ModalWindow
            isOpen={modalIsOpen}
            requestOnClose={closeModal}
            tripId={tripId}
          />
        </div>
      </Wrapper>
      <Footer />
    </div>
  );
}
