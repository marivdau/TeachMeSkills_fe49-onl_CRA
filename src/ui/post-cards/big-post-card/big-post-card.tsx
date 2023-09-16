import { useState } from 'react';
import { IPostCard } from '../../../types/post-card';
import styled from 'styled-components';
import { ReactComponent as VoteUpImg } from '../../../images/like-svgrepo-com.svg';
import { ReactComponent as VoteDwnImg } from '../../../images/dislike-svgrepo-com.svg';
import { ReactComponent as BookmarkImg } from '../../../images/bookmark-svgrepo-com.svg';
import { ReactComponent as DotsImg } from '../../../images/dots-horizontal-svgrepo-com.svg';

type PropsCard = {
  card: IPostCard;
};

export const Postcard: React.FC<PropsCard> = (props: PropsCard) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date(dateString).toLocaleDateString([], options);
  };

  const [voteUp, setVoteUp] = useState(props.card.votedUpNum!);
  const [voteDown, setVoteDown] = useState(props.card.votedDownNum!);
  const [userVotedLike, setUserVotedLike] = useState(false);
  const [userVotedDislike, setUserVotedDislike] = useState(false);
  const [addBookmark, setAddBookmark] = useState(false);

  return (
    <PostcardWrapper key={props.card.id}>
      <FirstLineDiv>
        <CardInfo>
          <DateDiv>{formatDate(props.card.date)}</DateDiv>
          <Title>{props.card.title.substring(0, 50) + '...'}</Title>
          <Text>{props.card.text.substring(0, 400) + '...'}</Text>
        </CardInfo>
        <ImageParentDiv>
          <Image src={props.card.image} />
        </ImageParentDiv>
      </FirstLineDiv>
      <SecondLine>
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
            <VoteUpImg
              fill="var(--svg-image-fill-color)"
              stroke="var(--text-primary-color)"
              style={{
                width: '20px',
                height: '20px',
                objectFit: 'cover',
                position: 'relative',
                top: '1px',
              }}
            />
          </VoteButton>
          <ActionCounter>{voteUp}</ActionCounter>
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
            <VoteDwnImg
              fill="var(--svg-image-fill-color)"
              stroke="var(--text-primary-color)"
              style={{
                width: '20px',
                height: '20px',
                objectFit: 'cover',
                position: 'relative',
                top: '1px',
              }}
            />
          </VoteButton>
          <ActionCounter>{voteDown}</ActionCounter>
        </LikeDiv>
        <div>
          <Bookmark
            type="button"
            onClick={() => setAddBookmark(!addBookmark)}
            className={addBookmark ? 'selected' : 'unselected'}
          >
            <BookmarkImg
              fill="transparent"
              stroke="var(--text-primary-color)"
              style={{
                width: '20px',
                height: '20px',
                objectFit: 'cover',
                position: 'relative',
                top: '1px',
              }}
            />
          </Bookmark>
          <DotsImg
            fill="transparent"
            stroke="var(--text-primary-color)"
            style={{
              width: '20px',
              height: '20px',
              objectFit: 'cover',
              position: 'relative',
              top: '1px',
            }}
          />
        </div>
      </SecondLine>
    </PostcardWrapper>
  );
};

const PostcardWrapper = styled.div`
  background-color: var(--background-color-extra-light);
  width: 100%;
  padding: 5px;

  &:after {
    content: '';
    display: block;
    margin: auto;
    margin: 34px auto;
    width: 98%;
    height: 2px;
    background-color: lightgray;
  }
`;

const FirstLineDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 20px;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60%;
`;

const DateDiv = styled.span`
  all: unset;
  font-size: 18px;
  color: gray;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  all: unset;
  font-size: 32px;
  font-weight: 700;
  line-height: 44px;
  margin-bottom: 10px;
  max-width: 100%;
  color: var(--text-primary-color);
`;

const Text = styled.p`
  all: unset;
  font-size: 16px;
  line-height: 32px;
  color: gray;
  max-width: 100%;
`;

const ImageParentDiv = styled.div`
  width: 256px;
  height: 244px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SecondLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LikeDiv = styled.div`
  display: flex;
  align-items: center;
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

const Bookmark = styled.button`
  border-color: transparent;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  margin-right: 10px;

  &.selected {
    background-color: lightgray;
  }

  &.unselected {
    background-color: transparent;
  }
`;

const ActionImg = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
  cursor: pointer;
`;

const ActionImage = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
  margin-right: 10px;
  cursor: pointer;
`;

const ActionCounter = styled.span`
  margin-right: 10px;
  font-weight: 600;
  color: var(--text-primary-color);
`;
