import { Postcard } from '#ui/post-cards/big-post-card/big-post-card';
import styled from 'styled-components';
import { postCardsListMockArray } from '../mock-data/mock-data-posts';
import { MediumPostcard } from '#ui/post-cards/medium-post-card/medium-post-card';
import { ShortPostcard } from '#ui/post-cards/short-post-card/short-post-card';
import { Title } from '#ui/title/title';
import { ITab, MyTabPanel } from '#ui/tabs/tab-panel/tab-panel';
import { useEffect, useState } from 'react';
import {
  getAllPosts,
  getAllPostsSuccess,
  getAllPostsFailure,
} from '#features/all-posts/all-posts.slice';
import { useAppDispatch, useAppSelector } from '../hooks';
import { DialogImagePreview } from '#features/dialog-image-preview/dialog-image-preview';

export const AllListPosts: React.FC = () => {
  const { showingDialogImagePreview } = useAppSelector(
    (state) => state.dialogImagePreview
  );
  const [selectedTab, setSelectedTab] = useState('all');

  const activeId = useAppSelector((state) => state.tabPanel.activeTab) || 'all';

  const BlogTabsMockArray: ITab[] = [
    {
      id: 'all',
      title: 'All',
      disabled: false,
    },
    {
      id: 'my-favourites',
      title: 'My Favourites',
      disabled: false,
    },
    {
      id: 'popular',
      title: 'Popular',
      disabled: false,
    },
  ];

  const dispatch = useAppDispatch();
  const  data = useAppSelector((state) => state.allPosts.posts)
  const { posts, isLoading, error } = useAppSelector(
    ({ allPosts }) => allPosts
  );

  useEffect(() => {
    dispatch(
      getAllPosts({ limit: 3, offset: 0, ordering: 'asc', search: 'post' })
    );
  }, [dispatch]);

  // useEffect(() => {
  //   const timerId = setTimeout(() => {
  //     if (Math.random() < 0.5) {
  //       dispatch(getAllPostsSuccess({ data: data }));
  //     } else {
  //       dispatch(getAllPostsFailure({ name: 'Error', mesage: 'SERVER ERROR' }));
  //     }
  //   }, 2000);

  //   return () => {
  //     clearTimeout(timerId);
  //   };
  // }, [dispatch]);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: ${error.message}</div>;
  // }

  return (
    <MainWrapper>
      <ContentWithPaddings>
        <Main>
          <Title>Blog</Title>
          <MyTabPanel
            tabItems={BlogTabsMockArray}
            // selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          ></MyTabPanel>

          <PostsDiv>
            <LeftListPosts>
              <BigPost>
                <Postcard
                  key={postCardsListMockArray[4].id}
                  card={postCardsListMockArray[4]}
                />
              </BigPost>
              <MediumPosts>
                {postCardsListMockArray.flatMap((item) => {
                  const needToShow =
                    activeId !== 'my-favourites' || [2, 5].includes(item.id);
                  return needToShow ? (
                    <MediumPostcard key={item.id} card={item} />
                  ) : (
                    []
                  );
                })}
              </MediumPosts>
            </LeftListPosts>

            <RightListPosts>
              {postCardsListMockArray.map((item) => (
                <ShortPostcard key={item.id} card={item} />
              ))}
            </RightListPosts>
          </PostsDiv>
          
        </Main>
        <Footer>
          <FooterDelimiter />
          <Year>{new Date().getFullYear()}</Year>
        </Footer>
      </ContentWithPaddings>
      <DialogImagePreview open={showingDialogImagePreview} />
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
