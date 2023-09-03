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
  color: blue;
  font-weight: 500;
`;
