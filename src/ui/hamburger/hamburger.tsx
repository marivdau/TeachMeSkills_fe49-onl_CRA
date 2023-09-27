import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as BurgerClosed } from '../../images/burger-icon-closed.svg';
import { ReactComponent as BurgerOpened } from '../../images/burger-icon-opened.svg';


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
        {items.map(({ id, title }) => (
          <ListLineWrapper key={id}>{title}</ListLineWrapper>
        ))}
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

const ListWrapper = styled.ul`
  all: unset;
  position: fixed;
  top: 70px;
  left: 0;
  z-index: 30;
  width: 250px;
  height: 100px;
  border-radius: 0;
  background-color: var(--system-primary-color);
`;

const ListLineWrapper = styled.li`
  all: unset;
  display: flex;
  flex-direction: column;
  margin: 10px 20px;
  background-color: var(--system-primary-color);
  color: white;
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
