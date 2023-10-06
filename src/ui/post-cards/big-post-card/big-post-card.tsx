import { useState } from 'react';
import { IPostCard } from '../../../types/post-card';
import styled from 'styled-components';
import { ReactComponent as DotsImg } from '../../../images/dots-horizontal-svgrepo-com.svg';
import { VotingLikeDislikeMain } from '#features/voting-up-down/voting-up-down-main/voting-up-down-main';
import { Link } from 'react-router-dom';
import { Bookmark } from '#features/bookmark/bookmark';

type PropsCard = {
  card: IPostCard;
};

export const Postcard: React.FC<PropsCard> = (props: PropsCard) => {
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
    <PostcardWrapper key={props.card.id}>
      <FirstLineDiv>
        <CardInfo>
          <DateDiv>{formatDate(props.card.date)}</DateDiv>
          <Link to={`/posts/${5}`} style={{ cursor: 'pointer' }}>
            <Title>{props.card.title.substring(0, 50) + '...'}</Title>{' '}
          </Link>
          <Text>{props.card.text.substring(0, 400) + '...'}</Text>{' '}
        </CardInfo>
        <ImageParentDiv>
          <Image src={props.card.image} />
        </ImageParentDiv>
      </FirstLineDiv>
      <SecondLine>
        <LikeDiv>
          <VotingLikeDislikeMain cardId={props.card.id}></VotingLikeDislikeMain>
        </LikeDiv>
        <div>
          <Bookmark />
          <DotsImgStyled />
        </div>
      </SecondLine>
    </PostcardWrapper>
  );
};

const PostcardWrapper = styled.div`
  background-color: var(--background-color-extra-light);
  width: 100%;
  padding: 5px;

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

const FirstLineDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 20px;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60%;
`;

const DateDiv = styled.span`
  all: unset;
  font-size: 18px;
  color: gray;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  all: unset;
  font-size: 32px;
  font-weight: 700;
  line-height: 44px;
  margin-bottom: 10px;
  max-width: 100%;
  color: var(--text-primary-color);
`;

const Text = styled.p`
  all: unset;
  font-size: 16px;
  line-height: 32px;
  color: gray;
  max-width: 100%;
`;

const ImageParentDiv = styled.div`
  width: 256px;
  height: 244px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SecondLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LikeDiv = styled.div`
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
