import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './core/MainLayout';
import AllStudies from './pages/Studies/AllStudies';
import StudyComponents from './pages/Studies/StudyComponents';
import AddStudy from './pages/Studies/AddStudy';
import Graphing from './pages/Analysis/Graphing';
import Heatmap from './pages/Analysis/Heatmap';
import PhysiologicalModeling from './pages/Analysis/PhysiologicalModeling';
import ViewExperimentalModels from './pages/Models/ViewExperimentalModels';
import AddExperimentalModels from './pages/Models/AddExperimentalModels';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/all-studies" element={<AllStudies />} />
        <Route path="/study-components" element={<StudyComponents />} />
        <Route path="/add-study" element={<AddStudy />} />
        <Route path="/graphing" element={<Graphing />} />
        <Route path="/heatmap" element={<Heatmap />} />
        <Route path="/physiological-modeling" element={<PhysiologicalModeling />} />
        <Route path="/view-experimental-models" element={<ViewExperimentalModels />} />
        <Route path="/add-experimental-models" element={<AddExperimentalModels />} />
      </Route>
    </Routes>
  );
}

export default App;
