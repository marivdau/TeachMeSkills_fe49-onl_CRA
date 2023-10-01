import { IPostCard } from '../../../types/post-card';
import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as BookmarkImg } from '../../../images/bookmark-svgrepo-com.svg';
import { ReactComponent as DotsImg } from '../../../images/dots-horizontal-svgrepo-com.svg';
import { VotingLikeDislikeMain } from '#features/voting-up-down/voting-up-down-main/voting-up-down-main';
import { Link } from 'react-router-dom';

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

  const [addBookmark, setAddBookmark] = useState(false);

  return (
    <MediumPostcardWrapper key={props.card.id}>
      <MediumFirstLine>
        <MediumImageParentDiv>
          <Image src={props.card.image} />
        </MediumImageParentDiv>
        <MediumCardFirstLine>
          <MediumDate>{formatDate(props.card.date)}</MediumDate>
          <Link
            to={`/posts/${props.card.id}`}
            style={{ cursor: 'pointer' }}
          >
            <MediumTitle>{props.card.title}</MediumTitle>
          </Link>
        </MediumCardFirstLine>
      </MediumFirstLine>
      <MediumSecondLine>
        <MediumLikeDiv>
          <VotingLikeDislikeMain cardId={props.card.id}></VotingLikeDislikeMain>
        </MediumLikeDiv>
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
      </MediumSecondLine>
    </MediumPostcardWrapper>
  );
};

const MediumPostcardWrapper = styled.div`
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
  color: var(--text-primary-color);
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
