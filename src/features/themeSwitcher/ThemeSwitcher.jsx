import React, {useContext, useEffect} from 'react'
import {IoMoon, IoMoonOutline, IoSunny} from 'react-icons/io5'

import {ThemeEnum, ThemeModeContext} from "../../context/Theme";
import styled from "styled-components";

const ThemeSwitcherEl = styled.span`
  box-shadow: var(--shadow);
  border-radius: var(--radii);
  font-size: var(--fs-sm);
  background-color: var(--colors-ui-base);

  display: flex;
  padding: 0.75rem;
  margin-left: 1rem;

  cursor: pointer;
  white-space: nowrap;
`
const ThemeSwitcher = () => {
    const {theme, toggleTheme} = useContext(ThemeModeContext);

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <ThemeSwitcherEl>
            <div onClick={() => toggleTheme(theme)}>
                {theme === ThemeEnum.LIGHT ? <IoMoon/> : <IoSunny/>}
                <span style={{marginLeft: '10px'}}>
        {theme === ThemeEnum.LIGHT ? 'Dark' : 'Light'} theme
      </span>
            </div>
        </ThemeSwitcherEl>

    );
};
export default ThemeSwitcher
