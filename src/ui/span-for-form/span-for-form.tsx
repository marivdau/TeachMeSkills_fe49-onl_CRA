import styled from 'styled-components';

type Props = {
  children: string;
};

export const Span: React.FC<Props> = ({ children }) => (
  <SpanWrapper>{children}</SpanWrapper>
);

const SpanWrapper = styled.a`
  color: var(--text-primary-color);
  font-weight: 400;
`;
