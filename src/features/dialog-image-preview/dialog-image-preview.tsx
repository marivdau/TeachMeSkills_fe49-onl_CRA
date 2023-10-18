import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CloseImg } from '../../images/close-svgrepo-com.svg';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { IPostCard } from '../../types/post-card';
import { ReactComponent as ArrowLeft } from '../../images/arrow-sm-left-svgrepo-com.svg';
import { ReactComponent as ArrowRight } from '../../images/arrow-sm-right-svgrepo-com.svg';
import { hide } from './dialog-image-preview.slice';

type PropsDialog = {
  open: boolean;
};

export const DialogImagePreview: React.FC<PropsDialog> = ({ open }) => {
  const dispatch = useAppDispatch();
  const { imageToShow } = useAppSelector((state) => state.dialogImagePreview);

  return (
    <DialogElement open={open} onClose={() => dispatch(hide())}>
      <CloseButton onClick={() => dispatch(hide())}>
        <CloseImg style={{ width: '100%', height: '100%' }} />
      </CloseButton>

      <ImageDiv>
        <Image src={imageToShow} alt="modal image" />
      </ImageDiv>

      <PaginationDiv>
        <LeftPagination>
          <PaginationButton type="button">
            <StyledArrowImageLeft />
            Back
          </PaginationButton>
        </LeftPagination>
        <RightPagination>
          <PaginationButton type="button">
            Next
            <StyledArrowImageRight />
          </PaginationButton>
        </RightPagination>
      </PaginationDiv>
    </DialogElement>
  );
};

const DialogElement = styled.dialog`
  cursor: default;
  position: absolute;
  top: 20%;
  border: none;
  padding: 100px 250px;
  z-index: 7;
  background-color: var(--background-color-medium-gray);

  &::backdrop {
    background-color: aquamarine;
  }
`;

const CloseButton = styled.button`
  all: unset;
  width: 30px;
  height: 30px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const ImageDiv = styled.div`
  width: 400px;
  height: 400px;
  margin: auto;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const PaginationDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 50px 0;
`;

const RightPagination = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  color: var(--text-secondary-color);
  cursor: pointer;
`;

const LeftPagination = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  color: var(--text-secondary-color);
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
  cursor: pointer;
  top: 5px;
`;

const StyledArrowImageRight = styled(ArrowRight)`
  fill: white;
  stroke: var(--text-primary-color);
  width: 20px;
  height: 20px;
  object-fit: cover;
  position: relative;
  cursor: pointer;
  top: 5px;
`;
