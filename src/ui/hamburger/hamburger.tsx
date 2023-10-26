import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as BurgerClosed } from '../../images/burger-icon-closed.svg';
import { ReactComponent as BurgerOpened } from '../../images/burger-icon-opened.svg';
import { Initials } from '#ui/user/user-initials/user-initials';
import { Username } from '#ui/user/user-name/username';
import { ThemeSwitcher } from '#features/theme-switcher/theme-switcher';
import { Link as MenuLink } from 'react-router-dom';
import { LogoutBtn } from '#features/auth/logout';

type Props = {
  items: Array<{
    id: string;
    title: string;
    link: string;
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
          {items.map(({ id, title, link }) => (
            <MenuLinkItem key={id} to={link}>
              <ListLineWrapper key={id}>
                <MenuButton key={id}>{title}</MenuButton>{' '}
              </ListLineWrapper>
            </MenuLinkItem>
          ))}
        </MenuItemsList>
        <ThemeSwitcher />
        <LogoutBtn />
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
  position: absolute;
  top: 84px;
  left: 0;
  z-index: 30;
  width: 236px;
  border-radius: 0;
  border-top: 1px solid var(--system-primary-second-color);
`;

const MenuItemsList = styled.ul`
  background-color: var(--contextual-white-color);
  padding-inline-start: 0;
  margin-block-start: 0;
  margin-block-end: 0;
`;

const ListLineWrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 83px;
  color: var(--text-primary-color);
  border-bottom: 1px solid var(--contextual-light-color);
`;

const MenuLinkItem = styled(MenuLink)`
  all: unset;
  color: var(--text-primary-color);

  &:hover {
    color: var(--system-primary-second-color);
  }
`;

const MenuButton = styled.button`
  all: unset;
`;

const Humburger = styled.button`
  all: unset;
  width: 83px;
  height: 83px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid var(--system-primary-second-color);
`;

const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 83px;
  background-color: var(--system-primary-color);
`;
