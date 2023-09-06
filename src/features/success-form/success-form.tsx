import { Button } from '#ui/button';
import { Span } from '#ui/span-for-form/span-for-form';

export const SuccessForm: React.FC = () => {
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
        <Span>Lorem ipsum </Span>
        <Span>Lorem ipsum dolor sit </Span>
      </div>
      <div style={{ width: '400px' }}>
        <Button variant="primary" onClick={() => null}>
          Go to the App
        </Button>
      </div>
    </form>
  );
};
