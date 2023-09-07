import styled from 'styled-components';
import { IPostCard } from '../../types/post-card';

type PropsCard = {
  card: IPostCard;
};

export const Post: React.FC<PropsCard> = (props: PropsCard) => {
  return (
    <PostWrapper key={props.card.id}>
      <Title>{props.card.title}</Title>
      <Imgdiv>
        <Image src={props.card.image} />
      </Imgdiv>
      <Text>{props.card.text}</Text>
    </PostWrapper>
  );
};

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin-bottom: 30px;
  color: var(--text-primary-color);
`;

const Imgdiv = styled.div`
  height: 400px;
  width: 600px;
  margin-bottom: 30px;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Text = styled.text`
  font-size: 18px;
  color: var(--text-primary-color);
  line-height: 32px;
`;
