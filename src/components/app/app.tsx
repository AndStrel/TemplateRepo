import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage, ProfilePage } from '../../pages';

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;
