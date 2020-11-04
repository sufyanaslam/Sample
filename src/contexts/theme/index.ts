import { createContext } from "react";
import { ITheme } from "./ITheme";
import { any } from "prop-types";

const ThemeContext = createContext<ITheme>({
  theme: "dark",
  setTheme: (arg0: "light" | "dark") => {}
});

export default ThemeContext;
