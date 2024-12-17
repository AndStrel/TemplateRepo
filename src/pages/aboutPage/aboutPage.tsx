import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page!</p>
      <Button
        variant="secondary"
        children="Go to Home"
        onClick={() => navigate('/')}
      />
    </div>
  );
};
