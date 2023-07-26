import { Routes, Route } from 'react-router-dom';
import SignUp from 'pages/Sing up/SignUp';
// import Home from './pages/Home/Home';
import SignIn from 'pages/Sign in/SignIn';
import NotFound from 'components/NotFound';
import MainPage from 'pages/Main Page/MainPage';

export const App = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<MainPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/bookings " element={''} />
        <Route path="/trip/:tripId " element={''} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
