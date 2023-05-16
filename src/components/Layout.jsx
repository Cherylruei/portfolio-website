import Header from 'components/header/Header';
import Navbar from 'components/navbar/Navbar';
import Footer from 'components/footer/Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
