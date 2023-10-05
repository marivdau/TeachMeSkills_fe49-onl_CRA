import { useEffect, useRef, useState } from 'react';
import { Input } from '#ui/input/input';
import { Button } from '#ui/button';
import { Link } from 'react-router-dom';
import { Span } from '#ui/span-for-form/span-for-form';
import styled from 'styled-components';
import { useAppDispatch } from '../../hooks';
import { authorization } from '#features/auth/authorization.slice';

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
  
  const dispatch = useAppDispatch();

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
      <ForgotPasswordDiv>
        <ForgotPasswordLink href="#">Forgot password?</ForgotPasswordLink>
      </ForgotPasswordDiv>
      <Button variant="primary" onClick={() => dispatch(authorization({email, password}))}>
        Sign In
      </Button>
      <SignUpTextDiv>
        <Span>Don’t have an account? </Span>
        <Link to={`/sign-up`}>Sign up</Link>
      </SignUpTextDiv>
    </form>
  );
};

const ForgotPasswordDiv = styled.div`
  margin-bottom: 25px;
`;

const ForgotPasswordLink = styled.a`
  text-decoration: none;
  color: var(--system-secondary-color);
`;

const SignUpTextDiv = styled.div`
  text-align: center;
  margin-top: 10px;
`;
