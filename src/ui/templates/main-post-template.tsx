import { useState } from 'react';
import styled from 'styled-components';

type Props = {
  header: React.ReactNode;
  backLink: React.ReactNode;
  body: React.ReactNode;
  children?: never;
};

export const MainPostTemplate: React.FC<Props> = ({
  header,
  backLink,
  body,
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
          <BodyContainer>{body}</BodyContainer>

          <ActionLineDiv>
            <VoteDiv>
              <LikeDiv>
                <VoteButton type="button" onClick={() => setVoteUp(voteUp + 1)}>
                  <ActionImg
                    alt="like"
                    src={require('../../images/like-svgrepo-com.svg').default}
                  />
                </VoteButton>
                <ActionCounter>{voteUp}</ActionCounter>
              </LikeDiv>
              <DislikeDiv>
                <VoteButton
                  type="button"
                  onClick={() => setVoteDown(voteDown + 1)}
                >
                  <ActionImg
                    alt="dislike"
                    src={
                      require('../../images/dislike-svgrepo-com.svg').default
                    }
                  />
                </VoteButton>
                <ActionCounter>{voteDown}</ActionCounter>
              </DislikeDiv>
            </VoteDiv>
            <Bookmark type="button" onClick={() => setAddBookmark(addBookmark)}>
              <ActionImg
                alt="bookmark"
                src={require('../../images/bookmark-svgrepo-com.svg').default}
              />
              <BookmarkSpan>Add to bookmarks</BookmarkSpan>
            </Bookmark>
          </ActionLineDiv>

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
                <span>Proceed to the previous page</span>
              </LeftPagination>
            </Left>
            <Right>
              <RightPagination>
                <span>Next</span>
                <span>Proceed to the next page</span>
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

const BodyContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  padding: 20px 10px;
  margin: auto;
`;

const LikeDiv = styled.div`
  display: flex;
  align-items: center;
  background-color: lightgray;
  border-radius: 5px;
  margin-right: 10px;
`;

const VoteButton = styled.button`
  border: none;
  background-color: transparent;
`;

const ActionImg = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
  margin-right: 10px;
  cursor: pointer;
`;

const ActionLineDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin: auto;
`;

const VoteDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const DislikeDiv = styled.div`
  display: flex;
  align-items: center;
  background-color: lightgray;
  border-radius: 5px;
`;

const Bookmark = styled.button`
  display: flex;
  align-items: center;
  background-color: lightgray;
  border-color: transparent;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
`;

const BookmarkSpan = styled.span`
  color: var(--text-primary-color);
`;

const ActionCounter = styled.span`
  margin-right: 10px;
  font-weight: 600;
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
  margin-right: 10px;
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
