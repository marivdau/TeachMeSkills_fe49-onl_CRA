import styled from 'styled-components';
import { IPostCard } from '../types/post-card';
import { Header } from '#features/header/header';
import { Title } from '#ui/title/title';
import { postCardsListMockArray } from '../mock-data/mock-data-posts';
import { SearchPostcard } from '#ui/post-cards/search-post-card/search-post-card';

type PropsSearchResultPosts = {
  cards: IPostCard[];
};

export const SearchResults: React.FC<PropsSearchResultPosts> = (
  props: PropsSearchResultPosts
) => {
  return (
    <MainWrapper>
      <Header />
      <ContentWithPaddings>
        <Main>
          <Title>Search results ‘Astronauts’</Title>

          <SearchPostsResultDiv>
            {postCardsListMockArray.map((item) => (
              <SearchPostcard key={item.id} card={item} />
            ))}
          </SearchPostsResultDiv>

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
                    require('../images/arrow-sm-right-svgrepo-com.svg').default
                  }
                  alt="#"
                />
              </PaginationButton>
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

const SearchPostsResultDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  margin: auto;
`;

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
