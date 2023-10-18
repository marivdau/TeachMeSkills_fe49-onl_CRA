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

  return (
    <InitialsWrapper>
      <InitialsSpan>{initialsLetters}</InitialsSpan>
    </InitialsWrapper>
  );
};

const InitialsWrapper = styled.div`
  width: 48px;
  height: 48px;
  background: var(--system-primary-second-color);
  margin-right: 10px;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InitialsSpan = styled.span`
  color: var(--contextual-light-color);
  font-weight: 600;
  font-size: 16px;
  line-height: 34px;
`;
