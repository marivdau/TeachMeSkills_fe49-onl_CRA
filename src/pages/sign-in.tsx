import { MainTemplate } from '#ui/templates/main-template';
import { Title } from '#ui/title/title';
import { BackLink } from '#features/back-link/back-link';
import { SignInForm } from '#features/sign-in-form/sign-in-form';

export const SignIn: React.FC = () => {
  return (
    <MainTemplate
      header={<header style={{ width: '100%', height: '40px' }}>Header</header>}
      backLink={<BackLink />}
      title={<Title>Sign In</Title>}
      body={<SignInForm />}
    />
  );
};
