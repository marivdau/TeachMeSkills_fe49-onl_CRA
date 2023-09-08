import { postCardsListMockArray } from '../mock-data/mock-data-posts';
import { Post } from '#ui/post/post';
import styled from 'styled-components';
import { useState } from 'react';

export const SelectedPost: React.FC = () => {
  const amountUp = 10;
  const amountDown = 2;
  const [voteUp, setVoteUp] = useState(amountUp);
  const [voteDown, setVoteDown] = useState(amountDown);
  const [userVotedLike, setUserVotedLike] = useState(false);
  const [userVotedDislike, setUserVotedDislike] = useState(false);
  const [addBookmark, setAddBookmark] = useState(false);

  return (
    <MainTemplateWrapper>
      <div>Header</div>
      <ContentWithPaddings>
        <Main>
          <BodyContainer>
            <Post card={postCardsListMockArray[9]} />
          </BodyContainer>

          <ActionLineDiv>
            <VoteDiv>
              <LikeDiv>
                <VoteButton
                  type="button"
                  onClick={() => {
                    setUserVotedLike(!userVotedLike);
                    if (!userVotedLike && userVotedDislike === true) {
                      setVoteUp(voteUp + 1);
                      setVoteDown(voteDown - 1);
                      setUserVotedDislike(!userVotedDislike);
                    } else if (!userVotedLike && userVotedDislike === false) {
                      setVoteUp(voteUp + 1);
                    } else {
                      setVoteUp(voteUp - 1);
                    }
                  }}
                  className={userVotedLike ? 'votedUp' : 'unvotedDwn'}
                >
                  <ActionImg
                    alt="like"
                    src={require('../images/like-svgrepo-com.svg').default}
                  />
                </VoteButton>
                <ActionCounter>{voteUp}</ActionCounter>
              </LikeDiv>
              <DislikeDiv>
                <VoteButton
                  type="button"
                  onClick={() => {
                    setUserVotedDislike(!userVotedDislike);
                    if (!userVotedDislike && userVotedLike === true) {
                      setVoteDown(voteDown + 1);
                      setVoteUp(voteUp - 1);
                      setUserVotedLike(!userVotedLike);
                    } else if (!userVotedDislike && userVotedLike === false) {
                      setVoteDown(voteDown + 1);
                    } else {
                      setVoteDown(voteDown - 1);
                    }
                  }}
                  className={userVotedDislike ? 'disVotedUp' : 'disVotedDwn'}
                >
                  <ActionImg
                    alt="dislike"
                    src={require('../images/dislike-svgrepo-com.svg').default}
                  />
                </VoteButton>
                <ActionCounter>{voteDown}</ActionCounter>
              </DislikeDiv>
            </VoteDiv>

            <Bookmark
              type="button"
              onClick={() => setAddBookmark(!addBookmark)}
              className={addBookmark ? 'selected' : 'unselected'}
            >
              <BookmarkImg
                alt="bookmark"
                src={require('../images/bookmark-svgrepo-com.svg').default}
              />
              Add to favorites
            </Bookmark>
          </ActionLineDiv>

          <PostDelimiter />

          <PagePagination>
            <Left>
              <ArrowImg
                src={require('../images/arrow-sm-left-svgrepo-com.svg').default}
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
  border-radius: 5px;
  margin-right: 10px;
`;

const VoteButton = styled.button`
  border: none;
  background-color: transparent;
  margin-right: 2px;

  &.votedUp {
    background-color: lightgray;
    border-radius: 10%;
  }

  &.unvotedDwn {
    background-color: transparent;
  }

  &.disVotedUp {
    background-color: lightgray;
    border-radius: 10%;
  }

  &.disVotedDwn {
    background-color: transparent;
  }
`;

const ActionImg = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
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
  border-radius: 5px;
`;

const Bookmark = styled.button`
  all: unset;
  font-size: 14px;
  border-radius: 5px;
  text-align: center;
  padding: 3px 7px 7px 5px;
  cursor: pointer;

  &.selected {
    background-color: lightgray;
  }

  &.unselected {
    background-color: transparent;
  }
`;

const BookmarkImg = styled.img`
  position: relative;
  margin-right: 10px;
  top: 4px;
  width: 20px;
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
