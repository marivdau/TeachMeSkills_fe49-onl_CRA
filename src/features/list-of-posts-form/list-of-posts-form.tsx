import { TabDefault } from '#features/tabs/tabs-with-content/tabs';
import { Postcard } from '#ui/post-cards/big-post-card/big-post-card';
import { IPostCard } from '../../interfaces/post-interface';
import styled from 'styled-components';

type PropsListOfPosts = {
  cards: IPostCard[];
};

export const ListOfPostsForm: React.FC<PropsListOfPosts> = (
  props: PropsListOfPosts
) => {
  return (
    <form>
      <TabDefault></TabDefault>
      <MainDiv>
        <LeftSide>
          <Postcard card={props.cards[1]}></Postcard>
        </LeftSide>
        <RightSide></RightSide>
      </MainDiv>
    </form>
  );
};

const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const LeftSide = styled.div``;

const RightSide = styled.div``;
