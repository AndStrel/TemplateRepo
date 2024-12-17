import { logout } from '../../store/slices/authSlice';
import { Button } from '../../components';
import { useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch, useAppSelector } from '../../store/store';
import { useEffect } from 'react';

export const ProfilePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAppSelector(
    (state: RootState) => state.auth,
  );

  const handleLogout = () => {
    dispatch(logout());
  };

  // Если пользователь не авторизован, перенаправляем его на главную страницу
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Welcome, {user?.name}!</p>
      <Button variant="secondary" onClick={handleLogout}>
        Log Out
      </Button>
    </div>
  );
};
