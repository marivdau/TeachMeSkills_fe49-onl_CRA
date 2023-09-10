import styled from 'styled-components';

type Props = {
  firstName: string;
  secondName: string;
};

export const Username: React.FC<Props> = ({ firstName, secondName }) => {
  const userName: Array<string> = [firstName, secondName].map(
    (item) =>
      item.charAt(0).toLocaleUpperCase() + item.slice(1).toLocaleLowerCase()
  );
  const stringUserName: string = userName.join(' ');
  return <UsernameWrapper>{stringUserName}</UsernameWrapper>;
};

const UsernameWrapper = styled.span`
  color: var(--contextual-white-color);
  font-weight: 600;
  font-size: 16px;
  line-height: 34px;
`;
