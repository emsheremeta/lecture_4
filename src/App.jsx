import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchTrips } from 'redux/operations';
import { useEffect } from 'react';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';
import SignUp from 'pages/Sign up/SignUp';
import SignIn from 'pages/Sign in/SignIn';
import NotFound from 'components/NotFound';
import MainPage from 'pages/Main Page/MainPage';
import Trip from 'pages/Trip/Trip';
import Bookings from 'pages/Bookings/Bookings';
// import { Layout } from 'components/Layout';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import Home from 'pages/Home/Home';

export const App = () => {
  const dispatch = useDispatch();
  console.log('start');

  // useEffect(() => {
  //   console.log('PA - FC');
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <div>
      <Routes>
        <Route index element={<Home />} />
        {/* <Route path="/main" element={<MainPage />} /> */}
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
        {/* <Route path="/sign-in" element={<SignIn />} /> */}
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
        {/* <Route path="/trip/:tripId" element={<Trip />} /> */}
        <Route path="*" element={<NotFound />} />
        {/* </Route> */}
      </Routes>
    </div>
  );
};
