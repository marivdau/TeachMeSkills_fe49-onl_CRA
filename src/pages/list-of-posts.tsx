import { BackLink } from '#features/back-link/back-link';
import { ListOfPostsForm } from '#features/list-of-posts-form/list-of-posts-form';
import { ListOfPostTemplate } from '#ui/templates/list-of-posts-template';
import { Title } from '#ui/title/title';

export const ListOfPosts: React.FC = () => {
  return (
    <ListOfPostTemplate
      header={<header style={{ width: '100%', height: '40px' }}>Header</header>}
      backLink={<BackLink />}
      title={<Title>Blog</Title>}
      body={<ListOfPostsForm />}
    />
  );
};
