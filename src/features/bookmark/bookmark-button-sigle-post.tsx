import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setFavourite } from './bookmark.slice';
import { useState } from 'react';

type PropsBookmark = {
  cardId: number;
};

export const BookmarkSingle: React.FC<PropsBookmark> = ({ cardId }) => {
  const dispatch = useAppDispatch();
  const favouritePost = useAppSelector((state) => state.favouritePost[cardId]);
  const activeFavourite = favouritePost.favourite === 'yes';
  const [buttonText, setButtonText] = useState('Add to favourites');

  function handleClick() {
    if (!activeFavourite) {
      setButtonText('In favourites');
    } else {
      setButtonText('Add to favourites');
    }
  }

  return (
    <div>
      <BookmarkSinglePost
        type="button"
        onClick={() => {
          dispatch(setFavourite({ cardId }));
          handleClick();
        }}
        className={activeFavourite ? 'selected' : 'unselected'}
      >
        <BookmarkImg
          alt="bookmark"
          src={require('../../images/bookmark-svgrepo-com.svg').default}
        />
        {buttonText}
      </BookmarkSinglePost>
    </div>
  );
};

const BookmarkSinglePost = styled.button`
  all: unset;
  width: 237px;
  height: 56px;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  padding: 3px;
  cursor: pointer;

  &.selected {
    background-color: var(--system-primary-second-color);
    color: var(--contextual-white-color);
  }

  &.unselected {
    background-color: var(--contextual-light-color);
  }

  &:hover {
    background-color: var(--system-primary-second-color);
  }
`;

const BookmarkImg = styled.img`
  position: relative;
  margin-right: 10px;
  top: 5px;
  width: 24px;
`;
