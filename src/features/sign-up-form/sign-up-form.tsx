import { useContext, useState } from 'react';
import { Input } from '#ui/input/input';
import { Button } from '#ui/button';
import { Span } from '#ui/span-for-form/span-for-form';
import { AuthorizedContext } from '../../AuthorizedContext';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SignUpForm: React.FC = () => {
  const isAutorized = useContext(AuthorizedContext);

  console.log('SignUpForm', { isAutorized });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  return (
    <form>
      <Input
        type="text"
        labelText="Name"
        placeholder="Name"
        value={name}
        onChange={({ currentTarget }) => setName(currentTarget.value)}
      />
      <Input
        type="email"
        labelText="Email"
        placeholder="Email"
        value={email}
        onChange={({ currentTarget }) => setEmail(currentTarget.value)}
        error={email ? undefined : `Email shoudn't be empty`}
      />
      <Input
        type="password"
        labelText="Password"
        placeholder="Password"
        value={password}
        onChange={({ currentTarget }) => setPassword(currentTarget.value)}
      />
      <Input
        type="password"
        labelText="Confirm password"
        placeholder="Confirm password"
        value={confirmedPassword}
        onChange={({ currentTarget }) =>
          setConfirmedPassword(currentTarget.value)
        }
      />
      <Button variant="primary" onClick={() => null}>
        Sign Up
      </Button>
      <SignInTextDiv>
        <Span>Lorem ipsum dolor sit </Span>
        <Link to={`/sign-in`}>Sign in</Link>
      </SignInTextDiv>
    </form>
  );
};

const SignInTextDiv = styled.div`
  text-align: center;
  margin-top: 10px;
`;
