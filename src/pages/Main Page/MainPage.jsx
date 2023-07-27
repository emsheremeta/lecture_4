import Footer from 'pages/Footer/Footer';
import Header from 'pages/Header/Header';
import trips from '../../trips.json';
import Trip from '../../components/Trip';
import {
  InputWrapper,
  InputField,
  SelectField,
  GridWrapper,
} from './MainPage.styled';

export default function MainPage() {
  return (
    <div>
      {/* <Header /> */}
      <InputWrapper>
        <InputField placeholder="Search by title" type="text" />
        <SelectField>
          <option>3</option>
          <option> 5</option>
          <option> 11</option>
          <option> 8</option>
          <option>13</option>
        </SelectField>
        <SelectField>
          <option>easy</option>
          <option>moderate</option>
          <option>difficult</option>
        </SelectField>
      </InputWrapper>
      {trips?.length === 0 && <p>Sorry, trip not found</p>}
      {trips && (
        <GridWrapper>
          {trips.map(el => (
            <Trip data={el} />
          ))}
        </GridWrapper>
      )}

      <Footer />
    </div>
  );
}
