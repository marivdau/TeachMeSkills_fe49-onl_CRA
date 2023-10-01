import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { setActiveTab } from './tab-panel.slice';

export interface ITab {
  id: string;
  title: string;
  disabled?: boolean;
}

type MyTabPanelProps = {
  tabItems: ITab[];
  selectedTab: string;
  setSelectedTab: (id: string) => void;
};

export const MyTabPanel: React.FC<MyTabPanelProps> = (
  props: MyTabPanelProps
) => {
  // const handleClick = (index: string) => {
  //   props.setSelectedTab(index);
  // };

  const dispatch = useAppDispatch();
  const activeId = useAppSelector((state) => state.tabPanel.activeTab) || 'all';

  return (
    <TabPanelWrapper>
      {props.tabItems.map((item, index) => (
        <TabWrapper key={index}>
          <TabButton
            type="button"
            onClick={() => dispatch(setActiveTab(item.id))}
            className={props.selectedTab === item.id ? 'active' : 'inactive'}
            disabled={item.disabled}
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
  border-bottom: 1px solid var(--border-primary-color);
`;

const TabWrapper = styled.li`
  display: block;
  box-sizing: border-box;
  margin-right: 30px;
`;

const TabButton = styled.button`
  all: unset;
  cursor: pointer;
  padding: 10px 20px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: var(--text-primary-color);

  &:hover {
    background-color: transparent;
    color: var(--system-primary-color);
  }

  &.active {
    border-bottom: 2px solid var(--border-accent-color);
  }

  &.inactive {
    border-bottom: 2px solid transparent;
  }

  &:disabled {
    cursor: none;
    opacity: 0.67;
    color: gray;
  }
`;
