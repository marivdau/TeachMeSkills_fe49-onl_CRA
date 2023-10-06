import styled from 'styled-components';
import { IPostCard } from '../../types/post-card';
import { VotingLikeDislikeSelectedPost } from '#features/voting-up-down/voting-up-down-selected-post/voting-up-down-selected-post';
import { BookmarkSingle } from '#features/bookmark/bookmark-button-sigle-post';

type PropsCard = {
  card: IPostCard;
  homeLink: React.ReactNode;
};

export const Post: React.FC<PropsCard> = (props: PropsCard) => {
  return (
    <PostWrapper key={props.card.id}>
      <BreadcrambsDiv>
        {props.homeLink}| <PostNum>Post {props.card.lesson_num}</PostNum>
      </BreadcrambsDiv>
      <Title>{props.card.title}</Title>
      <Imgdiv>
        <Image src={props.card.image} />
      </Imgdiv>
      {props.card.text.split('\n').map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}

      <ActionLineDiv>
        <VoteDiv>
          <VotingLikeDislikeSelectedPost
            cardId={props.card.id}
          ></VotingLikeDislikeSelectedPost>
        </VoteDiv>

        <BookmarkSingle cardId={props.card.id} />
      </ActionLineDiv>
    </PostWrapper>
  );
};

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const BreadcrambsDiv = styled.div`
  text-align: left;
  color: var(--text-secondary-color);
`;

const HomeButton = styled.button`
  all: unset;
  cursor: pointer;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--text-primary-color);
`;

const PostNum = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

const Title = styled.h1`
  margin-bottom: 30px;
  color: var(--text-primary-color);
  font-weight: 700;
  font-size: 52px;
  line-height: 80px;
`;

const Imgdiv = styled.div`
  height: 500px;
  width: 900px;
  margin-bottom: 30px;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Text = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: var(--text-primary-color);
  line-height: 32px;
  margin-bottom: 48px;
`;

const ActionLineDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: auto;
`;

const VoteDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
