import styled from 'styled-components';
import { ReactComponent as VoteUpImg } from '../../../images/like-svgrepo-com.svg';
import { ReactComponent as VoteDwnImg } from '../../../images/dislike-svgrepo-com.svg';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { setVoteDown, setVoteUp } from './voting-up-down-main.slice';

type PropsCard = {
  cardId: number;
};

export const VotingLikeDislikeMain: React.FC<PropsCard> = ({ cardId }) => {
  const dispatch = useAppDispatch();
  const rating = useAppSelector((state) => state.voteUpDown[cardId]);
  const activeLike = rating.userVote === 'up';
  const activeDislike = rating.userVote === 'down';

  return (
    <VoteDiv>
      <LikeDiv>
        <VoteButton
          type="button"
          onClick={() => {
            if (activeLike) return;
            dispatch(setVoteUp({ cardId }));
          }}
          className={activeLike ? 'votedUp' : 'unvotedDwn'}
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
        <ActionCounter>{rating.voteUpNum}</ActionCounter>
      </LikeDiv>
      <DislikeDiv>
        <VoteButton
          type="button"
          onClick={() => {
            if (activeDislike) return;
            dispatch(setVoteDown({ cardId }));
          }}
          className={activeDislike ? 'disVotedUp' : 'disVotedDwn'}
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
        <ActionCounter>{rating.voteDownNum}</ActionCounter>
      </DislikeDiv>
    </VoteDiv>
  );
};

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

const ActionCounter = styled.span`
  margin-right: 10px;
  font-weight: 600;
  color: var(--text-primary-color);
`;

const VoteDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const DislikeDiv = styled.div`
  all: unset;
`;
