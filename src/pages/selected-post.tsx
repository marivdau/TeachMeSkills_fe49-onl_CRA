import { BackLink } from '#features/back-link/back-link';
import { SelectedPostForm } from '#features/selected-post/selected-post-form';
import { MainPostTemplate } from '#ui/templates/main-post-template';

export const SelectedPost: React.FC = () => {
  return (
    <MainPostTemplate
      header={<header style={{ width: '100%', height: '40px' }}>Header</header>}
      backLink={<BackLink />}
      body={<SelectedPostForm />}
    />
  );
};
