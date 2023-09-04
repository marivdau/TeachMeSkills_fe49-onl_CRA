import styled from 'styled-components';

type Props = {
  id: number;
  image?: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  author: number;
};

export const Post: React.FC<Props> = ({
  id,
  image,
  text,
  date,
  lesson_num,
  title,
  author,
}) => {
  return (
    <PostWrapper key={id}>
      <Title>{title}</Title>
      <Imgdiv>
        <Image src={image} />
      </Imgdiv>
      <Text>{text}</Text>
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
