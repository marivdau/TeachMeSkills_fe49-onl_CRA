import { IPostCard } from '../../../interfaces/post-interface';
import { useState } from 'react';
import styled from 'styled-components';

type PropsCard = {
  card: IPostCard;
};

export const MediumPostcard: React.FC<PropsCard> = (props: PropsCard) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date(dateString).toLocaleDateString([], options);
  };

  const [voteUp, setVoteUp] = useState(0);
  const [voteDown, setVoteDown] = useState(0);

  return (
    <MediumPostcardWrapper key={props.card.id}>
      <MediumFirstLine>
        <MediumImageParentDiv>
          <Image src={props.card.image} />
        </MediumImageParentDiv>
        <MediumCardFirstLine>
          <MediumDate>{formatDate(props.card.date)}</MediumDate>
          <MediumTitle>{props.card.title}</MediumTitle>
        </MediumCardFirstLine>
      </MediumFirstLine>
      <MediumSecondLine>
        <MediumLikeDiv>
          <VoteButton type="button" onClick={() => setVoteUp(voteUp + 1)}>
            <MediumActionImage
              alt="like"
              src={require('../../../images/like-svgrepo-com.svg').default}
            />
          </VoteButton>
          <MediumActionCounter>{voteUp}</MediumActionCounter>
          <VoteButton type="button" onClick={() => setVoteDown(voteDown + 1)}>
            <MediumActionImage
              alt="dislike"
              src={require('../../../images/dislike-svgrepo-com.svg').default}
            />
          </VoteButton>
          <MediumActionCounter>{voteDown}</MediumActionCounter>
        </MediumLikeDiv>
        <div>
          <MediumActionImage
            alt="bookmark"
            src={require('../../../images/bookmark-svgrepo-com.svg').default}
          />
          <MediumActionImage
            alt="dots"
            src={
              require('../../../images/dots-horizontal-svgrepo-com.svg').default
            }
          />
        </div>
      </MediumSecondLine>
    </MediumPostcardWrapper>
  );
};

const MediumPostcardWrapper = styled.div`
  background-color: var(--background-primary-color);
  width: 350px;

  &:after {
    content: '';
    display: block;
    margin: auto;
    margin: 10px auto;
    width: 98%;
    height: 2px;
    background-color: lightgray;
  }
`;

const MediumFirstLine = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const MediumCardFirstLine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
`;

const MediumDate = styled.span`
  all: unset;
  font-size: 14px;
  color: gray;
  margin-bottom: 10px;
`;

const MediumTitle = styled.h2`
  all: unset;
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
`;

const MediumImageParentDiv = styled.div`
  width: 320px;
  height: 200px;
  margin: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MediumSecondLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const MediumLikeDiv = styled.div`
  display: flex;
  align-items: center;
`;

const VoteButton = styled.button`
  border: none;
  background-color: transparent;
`;

const MediumActionImage = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
  margin-right: 10px;
  cursor: pointer;
`;

const MediumActionCounter = styled.span`
  margin-right: 10px;
  font-weight: 600;
`;
