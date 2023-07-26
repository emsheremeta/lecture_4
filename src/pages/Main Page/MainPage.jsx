import Footer from 'pages/Footer/Footer';
import Header from 'pages/Header/Header';

export default function MainPage() {
  return (
    <div>
      <Header />
      <div>
        <input placeholder="Search by title" type="text" />
        <select>
          <option> 5 days</option>
          <option> 10 days</option>
          <option> 15 days</option>
          <option> 20 days</option>
        </select>
        <select>
          <option>easy</option>
          <option>medium</option>
          <option>hard</option>
        </select>
      </div>
      <Footer />
    </div>
  );
}
