import { useEffect, useState } from 'react';
import { ReactComponent as LightIcon } from '../../images/Icon-Sun.svg';
import { ReactComponent as DarkIcon } from '../../images/Icon-Moon.svg';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { turnOffDarkTheme, turnOnDarkTheme } from './theme-switcher.slice';

export const ThemeSwitcher: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.querySelector('.App')?.classList.toggle('dark', isDark);
  }, [isDark]);

  const dispatch = useAppDispatch();

  return (
    <ColorThemeButtonDiv>
      <LightThemeButton
        onClick={() => (dispatch(turnOffDarkTheme()), setIsDark(false))}
      >
        <LightIconStyle />
      </LightThemeButton>
      <DarkThemeButton
        onClick={() => (dispatch(turnOnDarkTheme()), setIsDark(true))}
      >
        <DarkIconStyle />
      </DarkThemeButton>
    </ColorThemeButtonDiv>
  );
};

const ColorThemeButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const LightThemeButton = styled.button`
  border-color: transparent;
  background-color: var(--contextual-white-color);
  height: 83px;
  width: 100%;
  border-right: 1px solid var(--contextual-light-color);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DarkThemeButton = styled.button`
  border-color: transparent;
  background-color: var(--contextual-white-color);
  height: 83px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LightIconStyle = styled(LightIcon)`
  fill: var(--svg-image-menu-color-light);
  stroke: var(--svg-image-menu-color-dark);
`;

const DarkIconStyle = styled(DarkIcon)`
  fill: var(--svg-image-menu-color-dark);
  stroke: var(--svg-image-menu-color-light);
`;
