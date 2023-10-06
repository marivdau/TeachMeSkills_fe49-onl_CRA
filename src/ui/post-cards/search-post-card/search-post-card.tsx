import { IPostCard } from '../../../types/post-card';
import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as DotsImg } from '../../../images/dots-horizontal-svgrepo-com.svg';
import { VotingLikeDislikeMain } from '#features/voting-up-down/voting-up-down-main/voting-up-down-main';
import { Bookmark } from '#features/bookmark/bookmark';

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
          <VotingLikeDislikeMain cardId={props.card.id}></VotingLikeDislikeMain>
        </SearchLikeDiv>
        <div>
          <Bookmark />
          <DotsImgStyled />
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

const DotsImgStyled = styled(DotsImg)`
  fill: transparent;
  stroke: var(--text-primary-color);
  width: 20px;
  height: 20px;
  object-fit: cover;
  position: relative;
  top: 1px;
`;
