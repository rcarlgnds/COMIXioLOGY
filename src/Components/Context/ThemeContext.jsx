import { createContext, useState } from "react";

export const THEME = {
  light: {
    foreground: "#000000",
    background: "#ffc900",
    color: "#000000",
    gradientColor1: "#cccccc",
    gradientColor2: "#ffc900"
  },

  dark: {
    foreground: "#000000",
    background: "#1c1c1c",
    color: "#ffffff",
    gradientColor1: "#3d3d3d",
    gradientColor2: "#1c1c1c"
  }
};

export const ThemeContext = createContext();

export function ThemeProvider(props) {
  const [theme, setTheme] = useState(THEME.light);

  const toggleTheme = () => {
    setTheme(theme === THEME.light ? THEME.dark : THEME.light);
  };

  const contextValue = {
    theme,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <div
        style={{
          backgroundColor: theme.background,
          color: theme.color,
          height: "100%"
        }}
      >
        {props.children}
      </div>
    </ThemeContext.Provider>
  );
}
