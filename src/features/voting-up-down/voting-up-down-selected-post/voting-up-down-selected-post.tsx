import styled from 'styled-components';
import { ReactComponent as VoteUpImg } from '../../../images/like-svgrepo-com.svg';
import { ReactComponent as VoteDwnImg } from '../../../images/dislike-svgrepo-com.svg';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { setVoteDown, setVoteUp } from './voting-up-down-selected-post.slice';

type PropsCard = {
  cardId: number;
};

export const VotingLikeDislikeSelectedPost: React.FC<PropsCard> = ({
  cardId,
}) => {
  const dispatch = useAppDispatch();
  const rating = useAppSelector((state) => state.voteUpDown[cardId]);
  const activeLike = rating.userVote === 'up';
  const activeDislike = rating.userVote === 'down';

  return (
    <VoteDiv>
      <LikeDiv>
        <VoteButtonUp
          type="button"
          onClick={() => {
            dispatch(setVoteUp({ cardId }));
          }}
          className={activeLike ? 'votedUp' : 'unvotedDwn'}
        >
          <VoteUpImgStyled />
        </VoteButtonUp>
        {/* <ActionCounter>{rating.voteUpNum}</ActionCounter> */}
      </LikeDiv>
      <DislikeDiv>
        <VoteButtonDown
          type="button"
          onClick={() => {
            dispatch(setVoteDown({ cardId }));
          }}
          className={activeDislike ? 'disVotedUp' : 'disVotedDwn'}
        >
          <VoteDwnImgStyled />
        </VoteButtonDown>
        {/* <ActionCounter>{rating.voteDownNum}</ActionCounter> */}
      </DislikeDiv>
    </VoteDiv>
  );
};

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
    background-color: var(--system-primary-second-color);
  }

  &.unvotedDwn {
    background-color: var(--contextual-light-color);
  }

  &:hover {
    background-color: var(--system-primary-second-color);
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

const VoteDwnImgStyled = styled(VoteDwnImg)`
  fill: var(--svg-image-fill-color);
  stroke: var(--text-primary-color);
  width: 20px;
  height: 20px;
  object-fit: cover;
  position: relative;
  top: 1px;
`;

const VoteUpImgStyled = styled(VoteUpImg)`
  fill: var(--svg-image-fill-color);
  stroke: var(--text-primary-color);
  width: 20px;
  height: 20px;
  object-fit: cover;
  position: relative;
  top: 1px;
`;
