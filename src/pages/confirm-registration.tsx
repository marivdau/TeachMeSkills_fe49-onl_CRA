import { MainTemplate } from '#ui/templates/main-template';
import { Title } from '#ui/title/title';
import { BackLink } from '#features/back-link/back-link';
import { RegistrationConfirmationForm } from '#features/registration-confirm-form/registration-confirm-form';

export const ConfirmRegistration: React.FC = () => {
  return (
    <MainTemplate
      header={<header style={{ width: '100%', height: '40px' }}>Header</header>}
      backLink={<BackLink />}
      title={<Title>Registration Confirmation</Title>}
      body={<RegistrationConfirmationForm />}
    />
  );
};
