import { useState } from 'react';
import styled from 'styled-components';
import { DropDown } from './drop-down';
import { reset, search } from './search.slice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { ReactComponent as SearchIcon } from '../../images/search-original.svg';
import { ReactComponent as CancelIcon } from '../../images/Icon-Cancel.svg';

type Props = {};

export const Search: React.FC<Props> = () => {
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);
  const [searchedText, setSearchedText] = useState<string>('');

  const dispatch = useAppDispatch();
  const { searchedPosts } = useAppSelector(({ search }) => search);

  return (
    <RelativeContainer>
      <>
        {isSearchActive ? (
          <>
            <SearchInput
              placeholder="Search..."
              value={searchedText}
              onChange={(event) => {
                setSearchedText(event.currentTarget.value);
                dispatch(search(event.currentTarget.value));
              }}
            ></SearchInput>

            <InputRightAction>
              <CloseInputIcon
                onClick={() => {
                  setSearchedText('');
                  dispatch(reset());
                }}
              >
                <CancelIcon />
              </CloseInputIcon>

              <SearchIconWrapper
                onClick={() => setIsSearchActive(!isSearchActive)}
              >
                <SearchIcon />
              </SearchIconWrapper>
            </InputRightAction>
            {
              <DropDown
                posts={searchedPosts.results}
                searchedString={searchedText}
              ></DropDown>
            }
          </>
        ) : (
          <>
            <SearchIconWrapper
              onClick={() => setIsSearchActive(!isSearchActive)}
            >
              <SearchIcon />
            </SearchIconWrapper>
          </>
        )}
      </>
    </RelativeContainer>
  );
};

const InputRightAction = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  right: -84px;
  display: flex;
  align-items: center;
`;

const RelativeContainer = styled.div`
  position: relative;
  width: 90%;
`;

const SearchIconWrapper = styled.button`
  background-color: transparent;
  width: 84px;
  height: 84px;
  cursor: pointer;
  border: 1px solid transparent;
  border-right: 1px solid var(--system-primary-second-color);
  border-left: 1px solid var(--system-primary-second-color);
`;

const SearchInput = styled.input`
  all: unset;
  height: 84px;
  padding: 0 20px;
  background-color: var(--system-primary-second-color);
  position: relative;
  width: 100%;
  outline: none;
  box-sizing: border-box;
  border: none;
  color: white;

  &::placeholder {
    color: white;
    opacity: 0.6;
  }
`;

const CloseInputIcon = styled.button`
  border: none;
  background-color: var(--system-primary-second-color);
  width: 84px;
  height: 84px;
  cursor: pointer;
`;
