import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import './index.css';

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
