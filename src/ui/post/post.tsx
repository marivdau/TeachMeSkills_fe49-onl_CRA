import styled from 'styled-components';
import { IPostCard } from '../../types/post-card';
import { useState } from 'react';

type PropsCard = {
  card: IPostCard;
};

export const Post: React.FC<PropsCard> = (props: PropsCard) => {

  const [voteUp, setVoteUp] = useState(props.card.votedUpNum!);
  const [voteDown, setVoteDown] = useState(props.card.votedDownNum!);
  const [userVotedLike, setUserVotedLike] = useState(false);
  const [userVotedDislike, setUserVotedDislike] = useState(false);
  const [addBookmark, setAddBookmark] = useState(false);

  return (
    <PostWrapper key={props.card.id}>
      <BreadcrambsDiv>
        <HomeButton>Home</HomeButton> | <PostNum>Post {props.card.lesson_num}</PostNum>
      </BreadcrambsDiv>
      <Title>{props.card.title}</Title>
      <Imgdiv>
        <Image src={props.card.image} />
      </Imgdiv>
      {props.card.text.split('\n').map((item, index) => <Text key={index}>{item}</Text>)}

      <ActionLineDiv>
        <VoteDiv>
          <LikeDiv>
            <VoteButtonUp
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
                src={require('../../images/like-svgrepo-com.svg').default}
              />
            </VoteButtonUp>
            {/* <ActionCounter>{voteUp}</ActionCounter> */}
          </LikeDiv>
          <DislikeDiv>
            <VoteButtonDown
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
                src={require('../../images/dislike-svgrepo-com.svg').default}
              />
            </VoteButtonDown>
            {/* <ActionCounter>{voteDown}</ActionCounter> */}
          </DislikeDiv>
        </VoteDiv>

        <Bookmark
          type="button"
          onClick={() => setAddBookmark(!addBookmark)}
          className={addBookmark ? 'selected' : 'unselected'}
        >
          <BookmarkImg
            alt="bookmark"
            src={require('../../images/bookmark-svgrepo-com.svg').default}
          />
          Add to favorites
        </Bookmark>
      </ActionLineDiv>
    </PostWrapper>
  );
};

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const BreadcrambsDiv = styled.div`
  text-align: left;
  color: gray;
`;

const HomeButton = styled.button`
  all: unset;
  cursor: pointer;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: black;
`;

const PostNum = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

const Title = styled.h1`
  margin-bottom: 30px;
  color: var(--text-primary-color);
  font-weight: 700;
  font-size: 52px;
  line-height: 80px;
`;

const Imgdiv = styled.div`
  height: 500px;
  width: 900px;
  margin-bottom: 30px;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Text = styled.text`
  font-size: 18px;
  font-weight: 400;
  color: var(--text-primary-color);
  line-height: 32px;
  margin-bottom: 48px;
`;

const LikeDiv = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const VoteButtonUp = styled.button`
  border: none;
  width: 88px;
  height: 56px;
  background-color: var(--contextual-light-color);
  margin-right: 2px;

  &.votedUp {
    background-color: var(--system-primary2-color);
  }

  &.unvotedDwn {
    background-color: var(--contextual-light-color);
  }

  &:hover {
    background-color: var(--system-primary2-color);
  }
`;

const VoteButtonDown = styled.button`
  border: none;
  width: 88px;
  height: 56px;
  background-color: var(--contextual-light-color);
  margin-right: 2px;

  &.disVotedUp {
    background-color: var(--contextual-error-color);
  }

  &.disVotedDwn {
    background-color: var(--contextual-light-color);
  }

  &:hover {
    background-color: var(--contextual-error-color);
  }
`;

const ActionImg = styled.img`
  width: 24px;
  height: 24px;
  object-fit: cover;
  cursor: pointer;
`;

const ActionLineDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: auto;
`;

const VoteDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const DislikeDiv = styled.div`
  all: unset;
`;

const Bookmark = styled.button`
  all: unset;
  width: 237px;
  height: 56px;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  padding: 3px;
  cursor: pointer;

  &.selected {
    background-color: var(--system-primary2-color);
    color: var(--contextual-white-color);
  }

  &.unselected {
    background-color: var(--contextual-light-color);
  }

  &:hover {
    background-color: var(--system-primary2-color);
  }
`;

const BookmarkImg = styled.img`
  position: relative;
  margin-right: 10px;
  top: 5px;
  width: 24px;
`;

const ActionCounter = styled.span`
  margin-right: 10px;
  font-weight: 600;
`;
