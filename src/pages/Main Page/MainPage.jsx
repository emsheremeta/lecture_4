import Footer from 'pages/Footer/Footer';
import Header from 'pages/Header/Header';
import trips from '../../trips.json';
import Trips from '../../components/Trips';
import {
  InputWrapper,
  InputField,
  SelectField,
  GridWrapper,
  Wrapper,
} from './MainPage.styled';
import { useState } from 'react';

export default function MainPage() {
  const [value, setValue] = useState('duration');
  const [search, setSearch] = useState('');

  const handleSearch = e => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const handleChangeOption = e => {
    setValue(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div>
      <Wrapper>
        <Header />
        <InputWrapper>
          <InputField
            placeholder="Search by title"
            type="text"
            value={search}
            onChange={handleSearch}
          />
          <SelectField onChange={handleChangeOption} defaultValue={value}>
            <option disabled={true}>duration</option>
            <option value={3}>3</option>
            <option value={5}>5</option>
            <option value={8}>8</option>
            <option value={11}>11</option>
            <option value={13}>13</option>
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
            {trips
              .filter(el =>
                el.title.toLowerCase().startsWith(search.toLowerCase())
              )
              .map(el => (
                <Trips data={el} />
              ))}
          </GridWrapper>
        )}

        <Footer />
      </Wrapper>
    </div>
  );
}
