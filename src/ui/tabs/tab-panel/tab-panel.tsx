import styled from 'styled-components';

export interface ITab {
  id: string;    
  title: string;
}

type MyTabPanelProps = {
  tabItems: ITab[];
  selectedTab: string;
  setSelectedTab: (id: string) => void;
};

export const MyTabPanel: React.FC<MyTabPanelProps> = (props: MyTabPanelProps) => {
  const handleClick = (index: string) => {
    props.setSelectedTab(index);
  };

  return (
    <TabPanelWrapper>
      {props.tabItems.map((item, index) => (
        <TabWrapper key={index}>
          <TabButton
            type="button"
            onClick={() => handleClick(item.id)}
            className={props.selectedTab === item.id ? 'active' : 'inactive'}
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
