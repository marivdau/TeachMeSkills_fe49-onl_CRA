import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BackLink: React.FC = () => (
  <BackLinkWrapper>
    <Link to="/">Back to home</Link>
  </BackLinkWrapper>
);

const BackLinkWrapper = styled.div`
  color: var(--text-primary-color);
`;
