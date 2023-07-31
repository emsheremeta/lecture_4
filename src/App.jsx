import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';
import SignUp from 'pages/Sign up/SignUp';
import SignIn from 'pages/Sign in/SignIn';
import NotFound from 'components/NotFound';
import MainPage from 'pages/Main Page/MainPage';
import Trip from 'pages/Trip/Trip';
import Bookings from 'pages/Bookings/Bookings';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import Home from 'pages/Home/Home';
import { Dna } from 'react-loader-spinner';

export const App = () => {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Dna
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  ) : (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="/main"
          element={
            <PrivateRoute redirectTo="/sign-in" component={<MainPage />} />
          }
        />
        <Route
          path="/sign-up"
          element={
            <RestrictedRoute redirectTo="/main" component={<SignUp />} />
          }
        />
        <Route
          path="/sign-in"
          element={
            <RestrictedRoute redirectTo="/main" component={<SignIn />} />
          }
        />
        <Route
          path="/bookings"
          element={
            <PrivateRoute redirectTo="/sign-in" component={<Bookings />} />
          }
        />
        <Route
          path="/trip/:tripId"
          element={<PrivateRoute redirectTo="/sign-in" component={<Trip />} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
