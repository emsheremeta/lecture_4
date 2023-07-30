import { Routes, Route } from 'react-router-dom';
import SignUp from 'pages/Sing up/SignUp';
import SignIn from 'pages/Sign in/SignIn';
import NotFound from 'components/NotFound';
import MainPage from 'pages/Main Page/MainPage';
import Trip from 'pages/Trip/Trip';
import Bookings from 'pages/Bookings/Bookings';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/trip/:tripId" element={<Trip />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
