import { Route, Routes } from 'react-router-dom';
import MainLayout from './core/layout/main-layout';
import Home from './pages/home/home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
