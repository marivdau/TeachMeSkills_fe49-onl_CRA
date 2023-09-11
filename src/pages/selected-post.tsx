import { postCardsListMockArray } from '../mock-data/mock-data-posts';
import { Post } from '#ui/post/post';
import styled from 'styled-components';

export const SelectedPost: React.FC = () => {
  return (
    <MainTemplateWrapper>
      <div>Header</div>
      <ContentWithPaddings>
        <Main>
          <BodyContainer>
            <Post card={postCardsListMockArray[0]} />
          </BodyContainer>

          <PostDelimiter />

          <PagePagination>
            <Left>
              <ArrowImg
                src={require('../images/arrow-sm-left-svgrepo-com.svg').default}
                alt="#"
              />
              <LeftPagination>
                <PrevNextSpan>Prev</PrevNextSpan>
                <PrevNextPostNameSpan>10 Things to Know About Salvador Dalí</PrevNextPostNameSpan>
              </LeftPagination>
            </Left>
            <Right>
              <RightPagination>
                <PrevNextSpan>Next</PrevNextSpan>
                <PrevNextPostNameSpan>8 Beautiful Villas Belonging to Artists You Need to See</PrevNextPostNameSpan>
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

const PagePagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 50px 0;
`;

const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
  color: var(--text-secondary-color);
`;

const PrevNextSpan = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: var(--text-primary-color)
`;

const PrevNextPostNameSpan = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--text-secondary-color);
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
