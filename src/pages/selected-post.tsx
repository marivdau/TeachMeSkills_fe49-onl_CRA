import { postCardsListMockArray } from '../mock-data/mock-data-posts';
import { Post } from '#ui/single-post/single-post';
import styled from 'styled-components';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Pagination } from '#features/pagination/pagination-selected-post/pagination-selected-post';

export const SelectedPost: React.FC = () => {
  const { postId } = useParams();
  const numericPostId = Number(postId);

  if (!Number.isFinite(numericPostId)) {
    return <Navigate to={'/'} />;
  }
  
  const selectedPost = postCardsListMockArray.find(
    (element) => element.id === numericPostId
  );
  if (!selectedPost) {
    return <Navigate to={'/'} />;
  }

  return (
    <MainTemplateWrapper>
      <div>Header</div>
      <ContentWithPaddings>
        <Main>
          <BodyContainer>
            <Post
              homeLink={
                <Link to="/">
                  <HomeButton>Home</HomeButton>
                </Link>
              }
              card={selectedPost}
            />
          </BodyContainer>

          <PostDelimiter />

          <Pagination />
        </Main>

        <Footer>
          <FooterDelimiter />
          <Year>{new Date().getFullYear()}</Year>
        </Footer>
      </ContentWithPaddings>
    </MainTemplateWrapper>
  );
};

const MainTemplateWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--background-primary-color);
`;

const ContentWithPaddings = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Main = styled.main`
  width: 100%;
  flex-grow: 1;
`;

const BodyContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  padding: 20px 10px;
  margin: auto;
`;

const HomeButton = styled.button`
  all: unset;
  cursor: pointer;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--text-primary-color);
`;

const PostDelimiter = styled.hr`
  width: 100%;
  margin-top: 30px;
`;

const Footer = styled.footer`
  width: 100%;
  height: 50px;
  color: var(--text-secondary-color);
`;

const FooterDelimiter = styled.hr`
  width: 100%;
`;

const Year = styled.div``;
