import styled from 'styled-components';
import { useState } from 'react';
import { ITab } from '../../../interfaces/tab-inerface';

type TabItems = {
  tabItems: ITab[];
};

export const MyTabPanel: React.FC<TabItems> = (props: TabItems) => {
  const [selectedTab, setSelectedTab] = useState(1);

  const handleClick = (index: number) => {
    setSelectedTab(index);
  };

  return (
    <TabPanelWrapper>
      {props.tabItems.map((item, index) => (
        <TabWrapper key={index}>
          <TabButton            
            type="button"
            onClick={() => handleClick(item.id)}
            className={selectedTab === item.id ? 'active' : 'inactive'}
          >
            {props.tabItems[index].title}
          </TabButton>
        </TabWrapper>
      ))}
    </TabPanelWrapper>
  );
};

const TabPanelWrapper = styled.ul`
  all: unset;
  display: flex;
  justify-content: flex-start;
  border: 1px solid var(--border-primary-color);
`;

const TabWrapper = styled.li`
  display: block;
  box-sizing: border-box;
  margin-right: 10px;
`;

const TabButton = styled.button`
  all: unset;
  cursor: pointer;
  padding: 10px 20px;

  &:hover {
    background-color: transparent;
  }

  &.active {
    border-bottom: 2px solid var(--border-accent-color);
  }

  &.inactive {
    border-bottom: 2px solid transparent;
  }
`;
