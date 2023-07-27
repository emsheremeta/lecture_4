import { Image } from 'pages/Main Page/MainPage.styled';

export default function Trip({ data }) {
  return (
    <li key={data.id}>
      <Image src={data.image} alt="trip" />
      <p>{data.title}</p>
      <p>{data.level}</p>
      <p>{data.price}</p>
      <button>Discover a trip</button>
    </li>
  );
}
