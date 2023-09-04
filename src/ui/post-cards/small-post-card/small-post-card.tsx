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

export const ShortPostcard: React.FC<Props> = ({
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
    <ShortPostcardWrapper key={id}>
      <ShortFirstLine>
        <ShortCardFirstLine>
          <ShortDate>{formatDate(date)}</ShortDate>
          <ShortTitle>{title}</ShortTitle>
        </ShortCardFirstLine>
        <ShortImageParentDiv>
          <Image src={image} />
        </ShortImageParentDiv>
      </ShortFirstLine>
      <ShortSecondLine>
        <ShortLikeDiv>
          <VoteButton type='button' onClick={() => setVoteUp(voteUp + 1)}>
            <ShortActionImage
              alt='like'
              src={require('../../../images/like-svgrepo-com.svg').default}
            />
          </VoteButton>
          <ShortActionCounter>{voteUp}</ShortActionCounter>
          <VoteButton type='button' onClick={() => setVoteDown(voteDown + 1)}>
            <ShortActionImage
              alt='dislike'
              src={require('../../../images/dislike-svgrepo-com.svg').default}
            />
          </VoteButton>
          <ShortActionCounter>{voteDown}</ShortActionCounter>
        </ShortLikeDiv>
        <div>
          <ShortActionImage
            alt='bookmark'
            src={require('../../../images/bookmark-svgrepo-com.svg').default}
          />
          <ShortActionImage
            alt='dots'
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
  padding: 20px;
  background-color: #e8e8e8;

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
  margin: auto;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const ShortCardFirstLine = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  justify-content: space-between;
  width: 80%;
`;

const ShortDate = styled.span`
  all: unset;
  font-size: 18px;
  color: gray;
  margin-bottom: 10px;
`;

const ShortTitle = styled.h2`
  all: unset;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  margin-bottom: 10px;
`;

const ShortImageParentDiv = styled.div`
  width: 100px;
  height: 100px;
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
