import { Outlet } from 'react-router-dom';
import NavBar from '../components/Navigation/NavBar/NavBar';

const LayoutWithoutHeader = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);

export default LayoutWithoutHeader;
