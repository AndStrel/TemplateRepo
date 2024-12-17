import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage, AboutPage } from '../../pages';

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default App;
