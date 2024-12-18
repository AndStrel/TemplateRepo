import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage, ProfilePage } from '../../pages';
import { CountdownTimer } from '../сountdownTimer';

export const App: React.FC = () => {
  return (
    <Router>
      <CountdownTimer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;
