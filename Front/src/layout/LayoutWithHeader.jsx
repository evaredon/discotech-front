import { Outlet } from 'react-router-dom';

import NavBar from '../components/Navigation/NavBar/NavBar';
import Header from '../components/Header/Header';

const LayoutWithHeader = () => (
  <>
    <NavBar />
    <Header />
    <Outlet />
  </>
);

export default LayoutWithHeader;
