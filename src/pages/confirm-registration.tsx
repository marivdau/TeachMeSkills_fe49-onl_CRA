import { MainTemplate } from '#ui/templates/main-template';
import { Title } from '#ui/title/title';
import { BackLink } from '#features/back-link/back-link';
import { RegistrationConfirmationForm } from '#features/registration-confirm-form/registration-confirm-form';
import { Navigate, useParams } from 'react-router-dom';

export const ConfirmRegistration: React.FC = () => {

  const confirmRegistration = useParams();

  if (!confirmRegistration) {
    return <Navigate to={'/'} />
  }

  return (
    <MainTemplate
      header={<></>}
      backLink={<BackLink />}
      title={<Title>Registration Confirmation</Title>}
      body={<RegistrationConfirmationForm />}
    />
  );
};
