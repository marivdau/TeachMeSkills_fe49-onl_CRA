import styled from 'styled-components';
import { Hamburger } from '#ui/hamburger/hamburger';
import { Initials } from '#ui/user/user-initials/user-initials';
import { Username } from '#ui/user/user-name/username';
import { ReactComponent as SearchIcon } from '../../images/search-original.svg';
import { ReactComponent as CancelIcon } from '../../images/Icon-Cancel.svg';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { toggle } from './header.slice';
import { menuMockArray } from '../../mock-data/mock-data-menu';

export const Header = () => {
  const dispatch = useAppDispatch();
  const { hamburgerOpen } = useAppSelector((state) => state.hamburgerMenu);

  return (
    <HeaderWrapper>
      <Hamburger
        items={menuMockArray.map((item) => item)}
        onClick={() => dispatch(toggle())}
      />

      <SearchArea>
        <SearchInput
          type="text"
          placeholder="Search..."
          maxLength={100}
          style={{ visibility: !hamburgerOpen ? 'visible' : 'hidden' }}
        />
        <CloseButton
          type="button"
          style={{ visibility: !hamburgerOpen ? 'visible' : 'hidden' }}
        >
          <CancelIcon />
        </CloseButton>
        <SearchButton type="button">
          <SearchIcon />
        </SearchButton>
      </SearchArea>
      <UserWrapper>
        <Initials firstName="Maryia" secondName="dauhan" />
        <Username firstName="Maryia" secondName="dauhan" />
      </UserWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  all: unset;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: var(--system-primary-color);
  height: 84px;
`;

const SearchArea = styled.div`
  all: unset;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1500px;
`;

const SearchInput = styled.input`
  all: unset;
  height: 84px;
  width: 1000px;
  color: white;
  border: none;
  padding: 0 20px;
  background-color: var(--system-primary2-color);

  &::placeholder {
    color: var(--contextual-light-color);
    font-size: 18px;
  }
`;

const CloseButton = styled.button`
  border: none;
  background-color: var(--system-primary2-color);
  width: 70px;
  height: 84px;
  cursor: pointer;
`;

const SearchButton = styled.button`
  background-color: transparent;
  width: 84px;
  height: 84px;
  cursor: pointer;
  border: 1px solid transparent;
  border-right: 1px solid var(--system-primary2-color);
  border-left: 1px solid var(--system-primary2-color);
`;

const UserWrapper = styled.div`
  margin-right: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
