import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <Button
        variant="primary"
        children="Go to About"
        onClick={() => navigate('/about')}
      />
    </div>
  );
};
