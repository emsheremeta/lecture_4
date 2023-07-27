import {
  Image,
  Title,
  TripInfo,
  TripPrice,
  Button,
  Link,
} from 'pages/Main Page/MainPage.styled';

export default function Trip({ data }) {
  return (
    <li key={data.id}>
      <Image src={data.image} alt="trip" />
      <Title>{data.title}</Title>
      <TripInfo>
        <p> LEVEL: {data.level}</p>
        <p> DURATION: {data.duration} days</p>
      </TripInfo>
      <TripPrice>PRICE: {data.price}$</TripPrice>
      <Button>
        <Link to="/trip/:tripId ">Discover a trip</Link>
      </Button>
    </li>
  );
}
