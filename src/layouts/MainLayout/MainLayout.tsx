// import { ThemeContext } from '@emotion/react';
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from 'theme/ThemeProvider';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './styles.scss';

function MainLayout() {
  const colorMode = useContext(ThemeContext);

  const onThemeModeChange = (mode: 'light' | 'dark') => {
    colorMode.toggleColorMode(mode);
  };

  return (
    <div>
      <Header changeThemeMode={onThemeModeChange} currentColorMode={colorMode.currentColorMode} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
