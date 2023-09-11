import { Title } from '#ui/title/title';
import styled from 'styled-components';
import { IPostCard } from '../types/post-card';
import { MediumPostcard } from '#ui/post-cards/medium-post-card/medium-post-card';
import { postCardsListMockArray } from '../mock-data/mock-data-posts';
import { ShortPostcard } from '#ui/post-cards/short-post-card/short-post-card';
import { ITab, MyTabPanel } from '#ui/tabs/tab-panel/tab-panel';
import { useState, useEffect } from 'react';
import { Header } from '#features/header/header';

type PropsListOfPosts = {
  cards: IPostCard[];
};

export const ListOfPosts: React.FC<PropsListOfPosts> = (
  props: PropsListOfPosts
) => {
  const [apiModels, setApiModels] = useState<IPostCard[] | null>(null);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setApiModels(postCardsListMockArray);
    }, 3000);
    return () => {
      clearTimeout(timerId);
    };
  }, []);

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

  return (
    <MainWrapper>
      <Header />
      <ContentWithPaddings>
        {apiModels ? (
          <Main>
            <Title>Blog</Title>
            <MyTabPanel
              tabItems={BlogTabsMockArray}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            ></MyTabPanel>

            <PostsDiv>
              <LeftSide>
                {postCardsListMockArray.flatMap((item) => {
                  const needToShow =
                    selectedTab !== 'my-favourites' || [2, 5].includes(item.id);
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

            <PagePagination>
              <Left>
                <PaginationButton type="button">
                  <ArrowImg
                    src={
                      require('../images/arrow-sm-left-svgrepo-com.svg').default
                    }
                    alt="#"
                  />{' '}
                  Back
                </PaginationButton>
              </Left>
              <JumperDiv>
                <JumpButton type="button">1</JumpButton>
                <JumpButton type="button">2</JumpButton>
                <JumpButton type="button">3</JumpButton>
                <JumpButton>...</JumpButton>
                <JumpButton type="button">6</JumpButton>
              </JumperDiv>
              <Right>
                <PaginationButton>
                  {' '}
                  Next
                  <ArrowImg
                    src={
                      require('../images/arrow-sm-right-svgrepo-com.svg')
                        .default
                    }
                    alt="#"
                  />
                </PaginationButton>
              </Right>
            </PagePagination>
          </Main>
        ) : null}

        <Footer>
          <FooterDelimiter />
          <Year>{new Date().getFullYear()}</Year>
        </Footer>
      </ContentWithPaddings>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  /* width: 100%; */
  /* height: 100%; */

  /* display: flex;
  flex-direction: column;
  align-items: center; */

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

const PagePagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 0;
`;

const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const JumperDiv = styled.div`
  color: var(--text-primary-color);
`;

const JumpButton = styled.button`
  all: unset;
  cursor: pointer;
  padding: 10px;
  margin: 5px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;

  &:hover {
    color: var(--system-primary-color);
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const PaginationButton = styled.button`
  all: unset;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: var(--text-secondary-color);

  &:hover {
    color: var(--system-primary-color);
  }
`;

const ArrowImg = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
  position: relative;
  top: 5px;
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
