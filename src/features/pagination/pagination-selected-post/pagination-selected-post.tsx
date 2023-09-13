import styled from 'styled-components';
import { ReactComponent as ArrowLeft } from '../../../images/arrow-sm-left-svgrepo-com.svg';
import { ReactComponent as ArrowRight } from '../../../images/arrow-sm-right-svgrepo-com.svg';

export const Pagination = () => {
  return (
    <PagePagination>
      <Left>
        <ArrowLeft
          fill="white"
          stroke="var(--text-primary-color)"
          width="20"
          height="20"
          style={{
            objectFit: 'cover',
            position: 'relative',
            top: '5px',
            cursor: 'pointer',
          }}
        />

        <LeftPagination>
          <PrevNextSpan>Prev</PrevNextSpan>
          <PrevNextPostNameSpan>
            10 Things to Know About Salvador Dalí
          </PrevNextPostNameSpan>
        </LeftPagination>
      </Left>
      <Right>
        <RightPagination>
          <PrevNextSpan>Next</PrevNextSpan>
          <PrevNextPostNameSpan>
            8 Beautiful Villas Belonging to Artists You Need to See
          </PrevNextPostNameSpan>
        </RightPagination>
        <ArrowRight
          fill="white"
          stroke="var(--text-primary-color)"
          width="20"
          height="20"
          style={{
            objectFit: 'cover',
            position: 'relative',
            top: '5px',
            cursor: 'pointer',
          }}
        />
      </Right>
    </PagePagination>
  );
};

const PagePagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 50px 0;
`;

const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const RightPagination = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const LeftPagination = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: var(--text-secondary-color);
`;

const PrevNextSpan = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: var(--text-primary-color);
`;

const PrevNextPostNameSpan = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--text-secondary-color);
`;
