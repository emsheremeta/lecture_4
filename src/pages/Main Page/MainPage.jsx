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
  ErrorMessage,
} from './MainPage.styled';
import { useState } from 'react';

export default function MainPage() {
  const [value, setValue] = useState('duration');
  const [level, setLevel] = useState('level');
  const [search, setSearch] = useState('');

  const handleSearch = e => {
    setSearch(e.target.value);
  };

  const handleChangeOption = e => {
    setValue(e.target.value);
  };

  const handleChangeLevel = e => {
    setLevel(e.target.value);
  };
  const getFilteredTrips = trips => {
    let filteredTrips = trips.filter(el =>
      el.title.toLowerCase().startsWith(search.toLowerCase())
    );
    if (level !== 'level') {
      filteredTrips = filteredTrips.filter(el => el.level === level);
    }

    if (value !== 'duration') {
      filteredTrips = filteredTrips.filter(
        el => el.duration.toString() === value
      );
    }

    return filteredTrips;
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
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="8">8</option>
            <option value="11">11</option>
            <option value="13">13</option>
            <option value="19">19</option>
          </SelectField>
          <SelectField onChange={handleChangeLevel} defaultValue={level}>
            <option disabled={true}>level</option>
            <option value="easy">easy</option>
            <option value="moderate">moderate</option>
            <option value="difficult">difficult</option>
          </SelectField>
        </InputWrapper>
        {getFilteredTrips(trips).length === 0 && (
          <ErrorMessage>Sorry, trip not found</ErrorMessage>
        )}
        {getFilteredTrips(trips).length > 0 && (
          <GridWrapper>
            {getFilteredTrips(trips).map(el => (
              <Trips data={el} key={el.id} />
            ))}
          </GridWrapper>
        )}

        <Footer />
      </Wrapper>
    </div>
  );
}
