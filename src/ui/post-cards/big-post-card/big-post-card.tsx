import { IPostCard } from '../../../interfaces/post-interface';
import styled from 'styled-components';

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

  return (
    <PostcardWrapper key={props.card.id}>
      <FirstLineDiv>
        <CardInfo>
          <DateDiv>{formatDate(props.card.date)}</DateDiv>
          <Title>{props.card.title}</Title>
          <Text>{props.card.text}</Text>
        </CardInfo>
        <ImageParentDiv>
          <Image src={props.card.image} />
        </ImageParentDiv>
      </FirstLineDiv>
    </PostcardWrapper>
  );
};

const PostcardWrapper = styled.div`
  background-color: #e8e8e8;
  width: 100%;

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
  font-size: 36px;
  font-weight: 700;
  line-height: 48px;
  margin-bottom: 10px;
  max-width: 100%;
`;

const Text = styled.p`
  all: unset;
  font-size: 18px;
  line-height: 32px;
  color: gray;
  max-width: 100%;
`;

const ImageParentDiv = styled.div`
  width: 400px;
  height: 400px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
