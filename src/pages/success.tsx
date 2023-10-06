import { MainTemplate } from '#ui/templates/main-template';
import { Title } from '#ui/title/title';
import { BackLink } from '#features/back-link/back-link';
import { SuccessForm } from '#features/success-form/success-form';
import { Navigate, useParams } from 'react-router-dom';

export const Success: React.FC = () => {

  const success = useParams();

  if (!success) {
    return <Navigate to={'/'} />
  }

  return (
    <MainTemplate
      header={<></>}
      backLink={<BackLink />}
      title={<Title>Success</Title>}
      body={<SuccessForm />}
    />
  );
};
