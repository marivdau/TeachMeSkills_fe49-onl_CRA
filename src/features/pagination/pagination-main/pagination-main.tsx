import styled from 'styled-components';
import { ReactComponent as ArrowLeft } from '../../../images/arrow-sm-left-svgrepo-com.svg';
import { ReactComponent as ArrowRight } from '../../../images/arrow-sm-right-svgrepo-com.svg';

export const PaginationMain = () => {
  return (
    <PagePagination>
      <Left>
        <PaginationButton type="button">
          <StyledArrowImageLeft /> Back
        </PaginationButton>
      </Left>
      <JumperDiv>
        <JumpButton type="button">1</JumpButton>
        <JumpButton type="button">2</JumpButton>
        <JumpButton type="button">3</JumpButton>
        <JumpButton>...</JumpButton>
        <JumpButton type="button">6</JumpButton>
      </JumperDiv>
      <Right>
        <PaginationButton type="button">
          Next
          <StyledArrowImageRight />
        </PaginationButton>
      </Right>
    </PagePagination>
  );
};

const PagePagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 0;
`;

const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const JumperDiv = styled.div`
  color: var(--text-primary-color);
`;

const JumpButton = styled.button`
  all: unset;
  cursor: pointer;
  padding: 10px;
  margin: 5px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;

  &:hover {
    color: var(--system-primary-color);
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const PaginationButton = styled.button`
  all: unset;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: var(--text-secondary-color);

  &:hover {
    color: var(--system-primary-color);
  }
`;

const StyledArrowImageLeft = styled(ArrowLeft)`
  fill: white;
  stroke: var(--text-primary-color);
  width: 20px;
  height: 20px;
  object-fit: cover;
  position: relative;
  top: 5px;
  cursor: pointer;
`;

const StyledArrowImageRight = styled(ArrowRight)`
  fill: white;
  stroke: var(--text-primary-color);
  width: 20px;
  height: 20px;
  object-fit: cover;
  position: relative;
  top: 5px;
  cursor: pointer;
`;
