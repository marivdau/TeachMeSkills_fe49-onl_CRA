import { Button } from '#ui/button';
import { Span } from '#ui/span-for-form/span-for-form';

export const RegistrationConfirmationForm: React.FC = () => {
  return (
    <form>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          marginBottom: '20px',
        }}
      >
        <Span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Span>
        <Span>Lorem ipsum dolor sit </Span>
        <Span>Lorem ipsum </Span>
      </div>
      <div style={{ width: '400px' }}>
        <Button variant="primary" onClick={() => null}>
          Success Confirmation
        </Button>
      </div>
    </form>
  );
};
