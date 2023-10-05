import { Button } from '#ui/button';
import { Span } from '#ui/span-for-form/span-for-form';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SuccessForm: React.FC = () => {
  return (
    <form>
      <FromText>
        <Span>Email confirmed.</Span>
        <Span>Your registration is now completed</Span>
      </FromText>
      <FromDivButton>
        <Link to='/sign-in'>
          <Button variant="primary" onClick={() => null} role='presentation'>
            Go to the App
          </Button>
        </Link>
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
