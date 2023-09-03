import { useState } from 'react';
import { Input } from '#ui/input/input';
import { Button } from '#ui/button';
import { Link } from '#ui/link/link';
import { Span } from '#ui/span/span';

export const SignInForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form>
      <Input
        type="email"
        labelText="Email"
        placeholder="Email"
        value={email}
        onChange={({ currentTarget }) => setEmail(currentTarget.value)}
      />
      <Input
        type="password"
        labelText="Password"
        placeholder="Password"
        value={password}
        onChange={({ currentTarget }) => setPassword(currentTarget.value)}
      />
      <div style={{ marginBottom: '25px' }}>
        <a href="#" style={{ textDecoration: 'none', color: '#535252' }}>
          Forgot password?
        </a>
      </div>
      <Button variant="primary" onClick={() => null}>
        Sign In
      </Button>
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <Span>Lorem ipsum dolor sit </Span>
        <Link url="#">Sign up</Link>
      </div>
    </form>
  );
};
