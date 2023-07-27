import {
  Image,
  Title,
  TripInfo,
  TripPrice,
  Button,
  Link,
} from 'pages/Main Page/MainPage.styled';
import { useLocation } from 'react-router-dom';

export default function Trip({ data }) {
  const location = useLocation();
  return (
    <li key={data.id}>
      <Image src={data.image} alt="trip" />
      <Title>{data.title}</Title>
      <TripInfo>
        <p> LEVEL: {data.level}</p>
        <p> DURATION: {data.duration} days</p>
      </TripInfo>
      <TripPrice>PRICE: {data.price}$</TripPrice>

      <Link to={`/trip/${data.id}`} state={{ from: location }}>
        <Button>Discover a trip</Button>
      </Link>
    </li>
  );
}
