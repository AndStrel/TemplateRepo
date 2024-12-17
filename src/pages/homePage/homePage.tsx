import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';
import { RootState, useAppDispatch, useAppSelector } from '../../store/store';
import { login } from '../../store/slices';
import { useEffect } from 'react';

export const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useAppSelector((state: RootState) => state.auth);

  const handleLogin = () => {
    dispatch(login({ name: 'John Doe', email: 'johndoe@example.com' }));
  };
  // Если пользователь уже авторизован, перенаправляем его на страницу профиля
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/profile');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <Button variant="primary" onClick={handleLogin}>
        Log In
      </Button>
    </div>
  );
};
