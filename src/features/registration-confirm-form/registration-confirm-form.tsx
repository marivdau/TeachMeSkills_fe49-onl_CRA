import { Button } from '#ui/button';
import styled from 'styled-components';

export const RegistrationConfirmationForm: React.FC = () => {
  return (
    <form>
      <FromText>
        <Span>Please activate your account with the activation</Span>
        <Span>
          link in the email <EmailSpan>example@gmail.com.</EmailSpan>
        </Span>
        <Span> Please, check your email</Span>
      </FromText>
      <FromDivButton>
        <Button variant="primary" onClick={() => null}>
          Go to home
        </Button>
      </FromDivButton>
    </form>
  );
};

const FromText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const FromDivButton = styled.div`
  width: 400px;
`;

const Span = styled.div`
  color: var(--text-primary-color);
  font-weight: 400;
`;

const EmailSpan = styled.span`
  font-weight: bold;
`;
