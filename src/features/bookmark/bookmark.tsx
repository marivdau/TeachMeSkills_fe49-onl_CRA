import styled from 'styled-components';
import { ReactComponent as BookmarkImg } from '../../images/bookmark-svgrepo-com.svg';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setFavourite } from './bookmark.slice';

type PropsBookmark = {
  cardId: number;
};

export const Bookmark: React.FC<PropsBookmark> = ({ cardId }) => {
  const dispatch = useAppDispatch();
  const favouritePost = useAppSelector((state) => state.favouritePost[cardId]);
  const activeFavourite = favouritePost.favourite === 'yes';

  return (
    <BookmarkDiv
      type="button"
      onClick={() => dispatch(setFavourite({ cardId }))}
      className={activeFavourite ? 'selected' : 'unselected'}
    >
      <BookmarkImgStyled />
    </BookmarkDiv>
  );
};

const BookmarkDiv = styled.button`
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

const BookmarkImgStyled = styled(BookmarkImg)`
  fill: transparent;
  stroke: var(--text-primary-color);
  width: 20px;
  height: 20px;
  object-fit: cover;
  position: relative;
  top: 1px;
`;
