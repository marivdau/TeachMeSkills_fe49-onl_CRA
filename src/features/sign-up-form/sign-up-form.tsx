import { useContext, useState } from 'react';
import { Input } from '#ui/input/input';
import { Button } from '#ui/button';
import { Span } from '#ui/span-for-form/span-for-form';
import { AuthorizedContext } from '../../AuthorizedContext';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { setConfirmedPassword, setEmail, setName, setPassword } from './sign-up-form.slice';
import { useAppDispatch, useAppSelector } from '../../hooks';

export const SignUpForm: React.FC = () => {
  const isAutorized = useContext(AuthorizedContext);

  console.log('SignUpForm', { isAutorized });

  const dispatch = useAppDispatch();
  const name = useAppSelector((state) => state.signUpForm.name);
  const email = useAppSelector((state) => state.signUpForm.email);
  const password = useAppSelector((state) => state.signUpForm.password);
  const confirmedPassword = useAppSelector(
    (state) => state.signUpForm.confirmedPassword
  );

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmedPassword, setConfirmedPassword] = useState('');

  return (
    <form>
      <Input
        type="text"
        labelText="Name"
        placeholder="Name"
        value={name}
        onChange={({ currentTarget }) => dispatch(setName(currentTarget.value))}
      />
      <Input
        type="email"
        labelText="Email"
        placeholder="Email"
        value={email}
        onChange={({ currentTarget }) => dispatch(setEmail(currentTarget.value))}
        error={email ? undefined : `Email shoudn't be empty`}
      />
      <Input
        type="password"
        labelText="Password"
        placeholder="Password"
        value={password}
        onChange={({ currentTarget }) => dispatch(setPassword(currentTarget.value))}
      />
      <Input
        type="password"
        labelText="Confirm password"
        placeholder="Confirm password"
        value={confirmedPassword}
        onChange={({ currentTarget }) =>dispatch(
          setConfirmedPassword(currentTarget.value))
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
