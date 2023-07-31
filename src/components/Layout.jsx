import Home from 'pages/Home/Home';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <Home />
      <Outlet />
    </div>
  );
};
