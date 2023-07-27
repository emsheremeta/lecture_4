import { useParams } from 'react-router-dom';
import trips from '../../trips.json';
import { Image, Wrapper, TripInfo, TripPrice, TripDesc } from './Trip.styled';
import Header from 'pages/Header/Header';
import Footer from 'pages/Footer/Footer';

export default function Trip() {
  const { tripId } = useParams();
  const trip = trips.filter(t => t.id === tripId)[0];

  if (!trip) {
    return <h1>Not found</h1>;
  }

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
        </div>
      </Wrapper>
      <Footer />
    </div>
  );
}
