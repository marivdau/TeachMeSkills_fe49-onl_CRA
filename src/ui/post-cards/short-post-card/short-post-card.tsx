import { IPostCard } from '../../../types/post-card';
import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as BookmarkImg } from '../../../images/bookmark-svgrepo-com.svg';
import { ReactComponent as DotsImg } from '../../../images/dots-horizontal-svgrepo-com.svg';
import { VotingLikeDislikeMain } from '#features/voting-up-down/voting-up-down-main/voting-up-down-main';

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

  const [addBookmark, setAddBookmark] = useState(false);

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
          <VotingLikeDislikeMain cardId={props.card.id}></VotingLikeDislikeMain>
        </ShortLikeDiv>
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
      </ShortSecondLine>
    </ShortPostcardWrapper>
  );
};

const ShortPostcardWrapper = styled.div`
  padding: 10px;
  background-color: var(--background-color-extra-light);
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
  color: var(--text-primary-color);
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
