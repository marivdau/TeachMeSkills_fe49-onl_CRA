import { useState } from 'react';
import { Input } from '#ui/input/input';
import { Button } from '#ui/button';
import { setName } from './sign-up-form.slice';
import { useAppDispatch, useAppSelector } from '#hooks';
import { register } from '#features/auth/registration.slice';

export const SignUpForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const name = useAppSelector(({ signUpForm }) => signUpForm.name);

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  /*
  const tabItems = [
    { id: '1', title: 'first' },
    { id: '2', title: 'second' },
    { id: '3', title: 'third' },
  ];

  const [activeTabId, setActiveTabId] = useState(tabItems[0].id);
  */

  return (
    <form>
      <Input
        type="text"
        labelText="Name"
        value={name}
        onChange={({ currentTarget }) => dispatch(setName(currentTarget.value))}
      />
      <Input
        type="email"
        labelText="Email"
        value={email}
        onChange={({ currentTarget }) => setEmail(currentTarget.value)}
        error={email ? undefined : `Email shoudn't be empty`}
      />
      <Input
        type="password"
        labelText="Password"
        value={password}
        onChange={({ currentTarget }) => setPassword(currentTarget.value)}
      />
      <Input
        type="password"
        labelText="Confirm password"
        value={confirmedPassword}
        onChange={({ currentTarget }) =>
          setConfirmedPassword(currentTarget.value)
        }
      />
      <Button
        variant="primary"
        onClick={() =>
          dispatch(
            register({
              username: name,
              password,
            })
          )
        }
      >
        Sign Up
      </Button>
    </form>
  );
};
