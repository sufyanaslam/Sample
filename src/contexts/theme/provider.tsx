import React, { ReactNode, useState } from "react";
import ThemeContext from "./";

interface IProps {
  children: ReactNode;
}

function ThemeProvider({ children }: IProps) {
  const [theme, themeSetter] = useState<"light" | "dark">("dark");

  function setTheme(color: "light" | "dark") {
    themeSetter(color);
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
