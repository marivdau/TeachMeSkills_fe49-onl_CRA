import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { authorizationLogout } from './authorization.slice';
import { Navigate } from 'react-router-dom';

export const LogoutBtn: React.FC = () => {
  const dispatch = useAppDispatch();
  const isCompleted = useAppSelector(
    (state) => state.authorization.isInComplete
  );
  if (!isCompleted) {
    return <Navigate to="/" />;
  }

  return (
    <LogoutButton onClick={() => dispatch(authorizationLogout())}>
      Log Out
    </LogoutButton>
  );
};

const LogoutButton = styled.button`
  all: unset;
  height: 83px;
  text-align: center;
  margin: auto;
  width: 100%;
  background-color: var(--background-color-medium-gray);
  font-weight: 600;
  line-height: 24px;
  font-size: 16px;
`;
