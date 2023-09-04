import { useState } from 'react';
import styled from 'styled-components';

type Props = {
  id: number;
  image?: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  author: number;
};

export const MediumPostcard: React.FC<Props> = ({
  id,
  image,
  text,
  date,
  lesson_num,
  title,
  author,
}) => {
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
    <MediumPostcardWrapper key={id}>
      <MediumFirstLine>
        <MediumImageParentDiv>
          <Image src={image} />
        </MediumImageParentDiv>
        <MediumCardFirstLine>
          <MediumDate>{formatDate(date)}</MediumDate>
          <MediumTitle>{title}</MediumTitle>
        </MediumCardFirstLine>
      </MediumFirstLine>
      <MediumSecondLine>
        <MediumLikeDiv>
          <VoteButton type='button' onClick={() => setVoteUp(voteUp + 1)}>
            <MediumActionImage
              alt='like'
              src={require('../../../images/like-svgrepo-com.svg').default}
            />
          </VoteButton>
          <MediumActionCounter>{voteUp}</MediumActionCounter>
          <VoteButton type='button' onClick={() => setVoteDown(voteDown + 1)}>
            <MediumActionImage
              alt='dislike'
              src={require('../../../images/dislike-svgrepo-com.svg').default}
            />
          </VoteButton>
          <MediumActionCounter>{voteDown}</MediumActionCounter>
        </MediumLikeDiv>
        <div>
          <MediumActionImage
            alt='bookmark'
            src={require('../../../images/bookmark-svgrepo-com.svg').default}
          />
          <MediumActionImage
            alt='dots'
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
  background-color: #e8e8e8;
  width: 100%;

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

const MediumFirstLine = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-bottom: 20px;
`;

const MediumCardFirstLine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px;
`;

const MediumDate = styled.span`
  all: unset;
  font-size: 18px;
  color: gray;
  margin-bottom: 10px;
`;

const MediumTitle = styled.h2`
  all: unset;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
`;

const MediumImageParentDiv = styled.div`
  width: 500px;
  height: 500px;
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
  margin: 20px;
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
