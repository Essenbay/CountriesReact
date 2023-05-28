import React, {useState} from 'react';
export  const ThemeEnum = {
    LIGHT: 'light',
    DARK: 'dark',
};

const ThemeModeContext = React.createContext();
function ThemeModeProvider(props){
    const [theme, setTheme] = useState(ThemeEnum.LIGHT);
    const toggleTheme =  (theme) => {
        if(theme === ThemeEnum.LIGHT) {
            setTheme(ThemeEnum.DARK)
        }
        else {
            setTheme(ThemeEnum.LIGHT)
        }
    };
    return (
        <div>
            <ThemeModeContext.Provider value={{theme, toggleTheme}}>
                {props.children}
            </ThemeModeContext.Provider>
        </div>
    )
}

export {ThemeModeContext, ThemeModeProvider};