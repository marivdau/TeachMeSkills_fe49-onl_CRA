import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as BurgerClosed } from '../../images/burger-icon-closed.svg';
import { ReactComponent as BurgerOpened } from '../../images/burger-icon-opened.svg';
import { Initials } from '#ui/user/user-initials/user-initials';
import { Username } from '#ui/user/user-name/username';
import { ReactComponent as LightIcon } from '../../images/Icon-Sun.svg';
import { ReactComponent as DarkIcon } from '../../images/Icon-Moon.svg';

type Props = {
  items: Array<{
    id: string;
    title: string;
  }>;
  onClick: () => void;
};

export const Hamburger: React.FC<Props> = ({ items, onClick }) => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <HumburgerWrapper>
      <Humburger onClick={toggleHamburger}>
        <BurgerClosed style={{ display: hamburgerOpen ? 'none' : 'flex' }} />
        <BurgerOpened style={{ display: hamburgerOpen ? 'block' : 'none' }} />
      </Humburger>

      <ListWrapper style={{ display: hamburgerOpen ? 'block' : 'none' }}>
        <UserWrapper>
          <Initials firstName="Maryia" secondName="dauhan" />
          <Username firstName="Maryia" secondName="dauhan" />
        </UserWrapper>
        <MenuItemsList>
          {items.map(({ id, title }) => (
            <ListLineWrapper key={id}>{title}</ListLineWrapper>
          ))}
        </MenuItemsList>
        <ColorThemeButtonDiv>
          <LightThemeButton>
            <LightIcon />
          </LightThemeButton>
          <DarkThemeButton>
            <DarkIcon />
          </DarkThemeButton>
        </ColorThemeButtonDiv>
        <LogoutButton>Log Out</LogoutButton>
      </ListWrapper>
    </HumburgerWrapper>
  );
};

const HumburgerWrapper = styled.div`
  all: unset;
  width: 84px;
  height: 84px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const ListWrapper = styled.div`
  all: unset;
  position: fixed;
  top: 84px;
  left: 0;
  z-index: 30;
  width: 236px;
  border-radius: 0;
  border-top: 1px solid var(--system-primary2-color);
`;

const MenuItemsList = styled.ul`
  all: unset;
  background-color: var(--contextual-white-color);
`;

const ListLineWrapper = styled.li`
  all: unset;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 83px;
  color: var(--system-secondary-color);
  border-bottom: 1px solid var(--contextual-light-color);
`;

const Humburger = styled.button`
  all: unset;
  width: 83px;
  height: 83px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid var(--system-primary2-color);
`;

const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 83px;
  background-color: var(--system-primary-color);
`;

const ColorThemeButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const LightThemeButton = styled.button`
  all: unset;
  height: 83px;
  width: 100%;
  border-right: 1px solid var(--contextual-light-color);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DarkThemeButton = styled.button`
  all: unset;
  height: 83px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoutButton = styled.button`
  all: unset;
  height: 83px;
  text-align: center;
  margin: auto;
  width: 100%;
  background-color: var(--background-color-extra-light);
  font-weight: 600;
  line-height: 24px;
  font-size: 16px;
`;
