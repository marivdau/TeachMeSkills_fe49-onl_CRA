import { Postcard } from '#ui/post-cards/big-post-card/big-post-card';
import styled from 'styled-components';
import { postCardsListMockArray } from '../mock-data/mock-data-posts';
import { MediumPostcard } from '#ui/post-cards/medium-post-card/medium-post-card';
import { ShortPostcard } from '#ui/post-cards/short-post-card/short-post-card';
import { Navigate, useParams } from 'react-router-dom';
import { Title } from '#ui/title/title';
import { ITab, MyTabPanel } from '#ui/tabs/tab-panel/tab-panel';
import { useState } from 'react';
import { PaginationMain } from '#features/pagination/pagination-main/pagination-main';

export const AllListPosts: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('all');

  const BlogTabsMockArray: ITab[] = [
    {
      id: 'all',
      title: 'All',
    },
    {
      id: 'my-favourites',
      title: 'My Favourites',
    },
    {
      id: 'popular',
      title: 'Popular',
    },
  ];

  const postsAll = useParams();

  if (!postsAll) {
    return <Navigate to={'/'} />
  }

  return (
    <MainWrapper>
      <ContentWithPaddings>
        <Main>

          <Title>Blog</Title>
          <MyTabPanel
            tabItems={BlogTabsMockArray}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          ></MyTabPanel>

          <PostsDiv>
            <LeftListPosts>
              <BigPost>
                <Postcard card={postCardsListMockArray[6]} />
              </BigPost>
              <MediumPosts>
                {postCardsListMockArray.flatMap((item) => {
                  const needToShow =
                    selectedTab !== 'my-favourites' || [2, 5].includes(item.id);
                  return needToShow ? (
                    <MediumPostcard key={item.id} card={item} />
                  ) : (
                    []
                  );
                })}
              </MediumPosts>
            </LeftListPosts>

            <RightListPosts>
              {postCardsListMockArray.map((item) => {
                return <ShortPostcard key={item.id} card={item} />
              })}
            </RightListPosts>
          </PostsDiv>

          <PaginationMain />

        </Main>
        <Footer>
          <FooterDelimiter />
          <Year>{new Date().getFullYear()}</Year>
        </Footer>
      </ContentWithPaddings>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  background-color: var(--background-color-extra-light);
`;

const ContentWithPaddings = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin: auto;
  flex-grow: 1;
`;

const Main = styled.main`
  width: 100%;
  flex-grow: 1;
`;

const PostsDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  margin: auto;
`;

const LeftListPosts = styled.div`
  display: flex;
  justify-content: stretch;
  flex-direction: column;
  max-width: 60vw;
`;

const BigPost = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const MediumPosts = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
`;

const RightListPosts = styled.div`
  display: flex;
  justify-content: stretch;
  flex-direction: column;
  max-width: 40vw;
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
