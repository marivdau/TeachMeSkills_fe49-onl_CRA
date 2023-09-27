import { Button } from '#ui/button';
import { Span } from '#ui/span-for-form/span-for-form';
import styled from 'styled-components';

export const RegistrationConfirmationForm: React.FC = () => {
  return (
    <form>
      <FromText>
        <Span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Span>
        <Span>Lorem ipsum dolor sit </Span>
        <Span>Lorem ipsum </Span>
      </FromText>
      <FromDivButton>
        <Button variant="primary" onClick={() => null}>
          Success Confirmation
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
