import { MainTemplate } from '#ui/templates/main-template';
import { Title } from '#ui/title/title';
import { BackLink } from '#features/back-link/back-link';
import { SuccessForm } from '#features/success-form/success-form';

export const Success: React.FC = () => {
  return (
    <MainTemplate
      header={<header style={{ width: '100%', height: '40px' }}>Header</header>}
      backLink={<BackLink />}
      title={<Title>Success</Title>}
      body={<SuccessForm />}
    />
  );
};
