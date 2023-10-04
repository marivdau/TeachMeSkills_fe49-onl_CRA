import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks';
import { activation } from '#features/auth/activation.slice';

export const ActivatePage: React.FC = () => {
  const { uid, token } = useParams();
  const dispatch = useAppDispatch();
  const isCompleted = useAppSelector(
    ({ activation }) => activation.isCompleted
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (isCompleted) {
      navigate('/sign-up/success');
    }
  }, [navigate, isCompleted]);

  useEffect(() => {
    if (uid && token) {
      dispatch(activation({ uid, token }));
    }
  }, [dispatch, uid, token]);

  if (!uid || !token) return <div>error</div>;
  return <div>success</div>;
};
