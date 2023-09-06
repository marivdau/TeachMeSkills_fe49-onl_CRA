import { IPostCard } from '../../../interfaces/post-interface';
import { useState } from 'react';
import styled from 'styled-components';

type PropsCard = {
  card: IPostCard;
};

export const ShortPostcard: React.FC<PropsCard> = (props: PropsCard) => {
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
    <ShortPostcardWrapper key={props.card.id}>
      <ShortFirstLine>
        <ShortCardFirstLine>
          <ShortDate>{formatDate(props.card.date)}</ShortDate>
          <ShortTitle>{props.card.title}</ShortTitle>
        </ShortCardFirstLine>
        <ShortImageParentDiv>
          <Image src={props.card.image} />
        </ShortImageParentDiv>
      </ShortFirstLine>
      <ShortSecondLine>
        <ShortLikeDiv>
          <VoteButton type="button" onClick={() => setVoteUp(voteUp + 1)}>
            <ShortActionImage
              alt="like"
              src={require('../../../images/like-svgrepo-com.svg').default}
            />
          </VoteButton>
          <ShortActionCounter>{voteUp}</ShortActionCounter>
          <VoteButton type="button" onClick={() => setVoteDown(voteDown + 1)}>
            <ShortActionImage
              alt="dislike"
              src={require('../../../images/dislike-svgrepo-com.svg').default}
            />
          </VoteButton>
          <ShortActionCounter>{voteDown}</ShortActionCounter>
        </ShortLikeDiv>
        <div>
          <ShortActionImage
            alt="bookmark"
            src={require('../../../images/bookmark-svgrepo-com.svg').default}
          />
          <ShortActionImage
            alt="dots"
            src={
              require('../../../images/dots-horizontal-svgrepo-com.svg').default
            }
          />
        </div>
      </ShortSecondLine>
    </ShortPostcardWrapper>
  );
};

const ShortPostcardWrapper = styled.div`
  padding: 10px;
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

const ShortFirstLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const ShortCardFirstLine = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  justify-content: space-between;
  width: 60%;
`;

const ShortDate = styled.span`
  all: unset;
  font-size: 14px;
  color: gray;
  margin-bottom: 5px;
`;

const ShortTitle = styled.h2`
  all: unset;
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  margin-bottom: 10px;
`;

const ShortImageParentDiv = styled.div`
  width: 90px;
  height: 90px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ShortSecondLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ShortLikeDiv = styled.div`
  display: flex;
  align-items: center;
`;

const VoteButton = styled.button`
  border: none;
  background-color: transparent;
`;

const ShortActionImage = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
  margin-right: 10px;
  cursor: pointer;
`;

const ShortActionCounter = styled.span`
  margin-right: 10px;
  font-weight: 600;
`;
