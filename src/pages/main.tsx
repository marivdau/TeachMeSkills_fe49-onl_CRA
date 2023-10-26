import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks';

export const Main: React.FC = () => {
  const isInComplete = useAppSelector(
    (state) => state.authorization.isInComplete
  );
  if (isInComplete) {
    return <Navigate to="/posts" />;
  }
  return <Navigate to="/sign-in" />;
};
