import { useState } from 'react';
import styled from 'styled-components';

type Props = {
  header: React.ReactNode;
  backLink: React.ReactNode;
  body: React.ReactNode;
  title: React.ReactNode;
  children?: never;
};

export const ListOfPostTemplate: React.FC<Props> = ({
  header,
  backLink,
  body,
  title,
}) => {
  const [voteUp, setVoteUp] = useState(0);
  const [voteDown, setVoteDown] = useState(0);
  const [addBookmark, setAddBookmark] = useState(0);

  return (
    <MainTemplateWrapper>
      {header}
      <ContentWithPaddings>
        <Main>
          <BackLinkContainer>{backLink}</BackLinkContainer>
          <TitleContainer>{title}</TitleContainer>
          <BodyContainer>{body}</BodyContainer>

          <PostDelimiter />

          <PagePagination>
            <Left>
              <ArrowImg
                src={
                  require('../../images/arrow-sm-left-svgrepo-com.svg').default
                }
                alt="#"
              />
              <LeftPagination>
                <span>Back</span>
              </LeftPagination>
            </Left>
            <JumperDiv>
              <span>1 2 3 ... 10</span>
            </JumperDiv>
            <Right>
              <RightPagination>
                <span>Next</span>
              </RightPagination>
              <ArrowImg
                src={
                  require('../../images/arrow-sm-right-svgrepo-com.svg').default
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

const BackLinkContainer = styled.div`
  width: 100%;
  height: 50px;
  text-align: start;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 75px;
  text-align: start;
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
