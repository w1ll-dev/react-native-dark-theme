import React from "react";
import { ThemeProvider } from "styled-components";
import { Title, Wrapper } from "./style";
import themes from "../../styles/themes/themes";
import { useColorScheme } from "react-native";

const Home = () => {
  const activeTheme = useColorScheme();
  const theme = themes[activeTheme] || themes.light;

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Title>Home</Title>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Home;
