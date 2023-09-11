import { IPostCard } from '../../../types/post-card';
import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as VoteUpImg } from '../../../images/like-svgrepo-com.svg';
import { ReactComponent as VoteDwnImg } from '../../../images/dislike-svgrepo-com.svg';
import { ReactComponent as BookmarkImg } from '../../../images/bookmark-svgrepo-com.svg';
import { ReactComponent as DotsImg } from '../../../images/dots-horizontal-svgrepo-com.svg';

type PropsCard = {
  card: IPostCard;
};

export const SearchPostcard: React.FC<PropsCard> = (props: PropsCard) => {
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
    <SearchPostcardWrapper key={props.card.id}>
      <SearchFirstLine>
        <SearchImageParentDiv>
          <Image src={props.card.image} />
        </SearchImageParentDiv>
        <SearchCardFirstLine>
          <SearchDate>{formatDate(props.card.date)}</SearchDate>
          <SearchTitle>{props.card.title}</SearchTitle>
        </SearchCardFirstLine>
      </SearchFirstLine>
      <SearchSecondLine>
        <SearchLikeDiv>
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
          <SearchActionCounter>{voteUp}</SearchActionCounter>
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
          <SearchActionCounter>{voteDown}</SearchActionCounter>
        </SearchLikeDiv>
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
      </SearchSecondLine>
    </SearchPostcardWrapper>
  );
};

const SearchPostcardWrapper = styled.div`
  padding: 10px;
  background-color: var(--background-color-extra-light);
  width: 100%;

  &:after {
    content: '';
    display: block;
    margin: auto;
    margin: 10px auto;
    width: 100%;
    height: 2px;
    background-color: var(--background-color-medium-gray);
  }
`;

const SearchFirstLine = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const SearchImageParentDiv = styled.div`
  width: 96px;
  height: 96px;
  margin-right: 40px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SearchCardFirstLine = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  width: 60%;
`;

const SearchDate = styled.span`
  all: unset;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: var(--text-secondary-color);
  margin-bottom: 5px;
`;

const SearchTitle = styled.h2`
  all: unset;
  font-size: 16px;
  font-weight: 600;
  line-height: 28px;
  margin-bottom: 10px;
  color: var(--text-primary-color);
`;

const SearchSecondLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SearchLikeDiv = styled.div`
  display: flex;
  align-items: center;
`;

const VoteButton = styled.button`
  border: none;
  background-color: transparent;
  margin-right: 2px;

  &.votedUp {
    background-color: var(--background-color-medium-gray);
    border-radius: 10%;
  }

  &.unvotedDwn {
    background-color: transparent;
  }

  &.disVotedUp {
    background-color: var(--background-color-medium-gray);
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
    background-color: var(--background-color-medium-gray);
  }

  &.unselected {
    background-color: transparent;
  }
`;

const SearchActionCounter = styled.span`
  margin-right: 10px;
  font-weight: 600;
  color: var(--text-primary-color);
`;
