import { Title } from '#ui/title/title';
import styled from 'styled-components';
import { IPostCard } from '../interfaces/post-interface';
import { MediumPostcard } from '#ui/post-cards/medium-post-card/medium-post-card';
import { postCardsListMockArray } from '../mock-data/mock-data-posts';
import { ShortPostcard } from '#ui/post-cards/short-post-card/short-post-card';
import { BlogTabsMockArray } from '../mock-data/mock-data-tabs';
import { MyTabPanel } from '#ui/tabs/tab-panel/tab-panel';
import { useState, useEffect } from 'react';

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

  return (
    <MainWrapper>
      <ContentWithPaddings>
        <div>Header</div>
        <Main>
          <Title>Blog</Title>
          <MyTabPanel tabItems={BlogTabsMockArray}></MyTabPanel>
          <PostDelimiter />
          <PostsDiv>
            <LeftSide>
              <MediumPostcard card={postCardsListMockArray[0]} />
              <MediumPostcard card={postCardsListMockArray[1]} />
              <MediumPostcard card={postCardsListMockArray[2]} />
              <MediumPostcard card={postCardsListMockArray[3]} />
              <MediumPostcard card={postCardsListMockArray[4]} />
              <MediumPostcard card={postCardsListMockArray[5]} />
            </LeftSide>
            <RightSide>
              <ShortPostcard card={postCardsListMockArray[6]} />
              <ShortPostcard card={postCardsListMockArray[7]} />
              <ShortPostcard card={postCardsListMockArray[8]} />
              <ShortPostcard card={postCardsListMockArray[1]} />
              <ShortPostcard card={postCardsListMockArray[2]} />
              <ShortPostcard card={postCardsListMockArray[8]} />
              <ShortPostcard card={postCardsListMockArray[8]} />
            </RightSide>
          </PostsDiv>
          <PostDelimiter />

          <PagePagination>
            <Left>
              <ArrowImg
                src={require('../images/arrow-sm-left-svgrepo-com.svg').default}
                alt="#"
              />
              <LeftPagination>
                <span>Back</span>
              </LeftPagination>
            </Left>
            <JumperDiv>
              <JumpButton type="button">1</JumpButton>
              <JumpButton type="button">2</JumpButton>
              <JumpButton type="button">3</JumpButton>
              <JumpButton type="button">4</JumpButton>
              <JumpButton>...</JumpButton>
              <JumpButton type="button">12</JumpButton>
            </JumperDiv>
            <Right>
              <RightPagination>
                <span>Next</span>
              </RightPagination>
              <ArrowImg
                src={
                  require('../images/arrow-sm-right-svgrepo-com.svg').default
                }
                alt="#"
              />
            </Right>
          </PagePagination>
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

const PostsDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  /* padding: 20px 10px; */
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
`;

const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const RightPagination = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const LeftPagination = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ArrowImg = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
  margin: 0 10px;
  cursor: pointer;
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
