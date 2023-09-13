import { useEffect, useRef, useState } from 'react';
import { Input } from '#ui/input/input';
import { Button } from '#ui/button';
import { Link } from '#ui/link/link';
import { Span } from '#ui/span-for-form/span-for-form';

export const SignInForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const ref = useRef<HTMLFormElement | null>(null);
  const [ref2, setRef2] = useState<HTMLFormElement | null>(null);
  console.log('current ref value', ref.current?.tagName);

  useEffect(() => {
    if (!ref2) {
      return;
    }
    const resizeObserver = new ResizeObserver(([entry]) => {
      if (entry.contentRect.width < 400) {
        console.log('Not enough width!');
      }
    });
    resizeObserver.observe(ref2);
    return () => resizeObserver.unobserve(ref2);
  }, [ref2]);

  return (
    <form ref={setRef2}>
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
        <a
          href="#"
          style={{
            textDecoration: 'none',
            color: 'var(--system-secondary-color)',
          }}
        >
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
