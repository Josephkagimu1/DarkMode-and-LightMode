import React, { useState } from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        
        <button className="btn" onClick={() => themeToggler()}>Change Theme</button>
        <h1 className="h1" style={{fontSize:'50px'}}> hello world </h1>
        <h1 className="h1"> Change background theme </h1>

      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
