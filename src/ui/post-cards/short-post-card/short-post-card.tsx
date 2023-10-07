import { IPostCard } from '../../../types/post-card';
import styled from 'styled-components';
import { ReactComponent as DotsImg } from '../../../images/dots-horizontal-svgrepo-com.svg';
import { VotingLikeDislikeMain } from '#features/voting-up-down/voting-up-down-main/voting-up-down-main';
import { Link } from 'react-router-dom';
import { Bookmark } from '#features/bookmark/bookmark';
import { showing } from '#features/dialog-image-preview/dialog-image-preview.slice';
import { useDispatch } from 'react-redux';

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

  const dispatch = useDispatch();

  return (
    <ShortPostcardWrapper key={props.card.id}>
      <ShortFirstLine>
        <ShortCardFirstLine>
          <ShortDate>{formatDate(props.card.date)}</ShortDate>
          <Link to={`/posts/${props.card.id}`} style={{ cursor: 'pointer' }}>
            <ShortTitle>{props.card.title}</ShortTitle>
          </Link>
        </ShortCardFirstLine>
        <ShortImageParentDiv onClick={() => dispatch(showing({ cardId: props.card.id }))}>
          <Image src={props.card.image} />
        </ShortImageParentDiv>
      </ShortFirstLine>
      <ShortSecondLine>
        <ShortLikeDiv>
          <VotingLikeDislikeMain cardId={props.card.id}></VotingLikeDislikeMain>
        </ShortLikeDiv>
        <div>
          <Bookmark cardId={props.card.id} />
          <DotsImgStyled />
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
  cursor: pointer;
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

const DotsImgStyled = styled(DotsImg)`
  fill: transparent;
  stroke: var(--text-primary-color);
  width: 20px;
  height: 20px;
  object-fit: cover;
  position: relative;
  top: 1px;
`;
