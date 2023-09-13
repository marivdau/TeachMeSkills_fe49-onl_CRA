import styled from 'styled-components';

type Props = {
  firstName: string;
  secondName: string;
};

export const Initials: React.FC<Props> = ({ firstName, secondName }) => {
  const userName: Array<string> = [firstName, secondName];
  const initialsLetters: string = userName
    .map((item) => item.charAt(0).toUpperCase())
    .join('');

  return <InitialsWrapper>{initialsLetters}</InitialsWrapper>;
};

const InitialsWrapper = styled.span`
  color: var(--contextual-white-color);
  padding: 10px;
  width: 48px;
  height: 48px;
  background: var(--system-primary2-color);
  margin-right: 10px;
  font-weight: 600;
  font-size: 16px;
  line-height: 34px;
  border-radius: 2px;
`;
