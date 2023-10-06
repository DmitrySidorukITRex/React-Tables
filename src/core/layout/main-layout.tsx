import { Outlet } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';

function MainLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
