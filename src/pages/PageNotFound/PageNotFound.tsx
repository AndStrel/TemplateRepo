import { useNavigate } from 'react-router-dom';
import { PageNotFoundUI } from '@ui/pages/PageNotFoundUI';

export const PageNotFound: React.FC = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/');
  };

  return <PageNotFoundUI handleClick={goHome} />;
};
