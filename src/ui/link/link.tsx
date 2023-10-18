import styled from 'styled-components';

type Props = {
  url: string;
  children: string;
};

export const Link: React.FC<Props> = ({ children }) => (
  <LinkWrapper>{children}</LinkWrapper>
);

const LinkWrapper = styled.a`
  cursor: pointer;
  color: var(--system-primary-second-color);
  font-weight: 500;
`;
