import { Title } from '#ui/title/title';
import styled from 'styled-components';
import { IPostCard } from '../types/post-card';
import { MediumPostcard } from '#ui/post-cards/medium-post-card/medium-post-card';
import { postCardsListMockArray } from '../mock-data/mock-data-posts';
import { ShortPostcard } from '#ui/post-cards/short-post-card/short-post-card';
import { ITab, MyTabPanel } from '#ui/tabs/tab-panel/tab-panel';
import { useState, useEffect } from 'react';
import { PaginationMain } from '#features/pagination/pagination-main/pagination-main';
import { useAppDispatch, useAppSelector } from '../hooks';
import { DialogImagePreview } from '#features/dialog-image-preview/dialog-image-preview';
import { getAllPosts } from '#features/all-posts/all-posts.slice';

export const ListOfPosts: React.FC = () => {
  const [apiModels, setApiModels] = useState<IPostCard[] | null>(null);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setApiModels(postCardsListMockArray);
    }, 3000);
    return () => {
      clearTimeout(timerId);
    };
  }, []);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      getAllPosts({ limit: 3, offset: 0, ordering: 'asc', search: 'post' })
    );
  }, [dispatch]);

  const [selectedTab, setSelectedTab] = useState('all');

  const activeId = useAppSelector((state) => state.tabPanel.activeTab) || 'all';

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

  return (
    <MainWrapper>
      <ContentWithPaddings>
        {apiModels ? (
          <Main>
            <Title>Blog</Title>
            <MyTabPanel
              tabItems={BlogTabsMockArray}
              setSelectedTab={setSelectedTab}
            ></MyTabPanel>

            <PostsDiv>
              <LeftSide>
                {postCardsListMockArray.flatMap((item) => {
                  const needToShow =
                    activeId !== 'my-favourites' || [2, 5].includes(item.id);
                  return needToShow ? (
                    <MediumPostcard key={item.id} card={item} />
                  ) : (
                    []
                  );
                })}
              </LeftSide>
              <RightSide>
                {postCardsListMockArray.map((item) => (
                  <ShortPostcard key={item.id} card={item} />
                ))}
              </RightSide>
            </PostsDiv>

            <PaginationMain />
          </Main>
        ) : null}

        <Footer>
          <FooterDelimiter />
          <Year>{new Date().getFullYear()}</Year>
        </Footer>
      </ContentWithPaddings>
      <DialogImagePreview card={postCardsListMockArray} />
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

const LeftSide = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const RightSide = styled.div``;

const Footer = styled.footer`
  width: 100%;
  height: 50px;
  color: var(--text-secondary-color);
`;

const FooterDelimiter = styled.hr`
  width: 100%;
`;

const Year = styled.div``;
