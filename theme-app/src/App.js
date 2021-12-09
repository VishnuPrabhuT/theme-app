import React from "react";
import { Provider } from "react-redux";
import styled from "styled-components";
import theme from "styled-theming";
import DarkThemeProvider from "./DarkThemeProvider";
import store from "./redux/store";
import DarkThemeToggle from "./DarkThemeToggle";

import "./App.css";

export const theme1 = theme("theme", {
    light: "#fff",
    dark: "#2d2d2d",
});

export const theme2 = theme("theme", {
    light: "#000",
    dark: "#fff",
});

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    font-family: sans-serif;
    background-color: ${theme1};
    color: ${theme2};
`;

const SwitchTheme = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
    height: 75px;
    background-color: ${theme2};
    color: ${theme1};
`;

function App() {
    return (
        <Provider store={store}>
            <DarkThemeProvider>
                <SwitchTheme>
                    <h1>Theme App</h1>
                    <p>
                        <DarkThemeToggle />
                    </p>
                </SwitchTheme>
                <Container>
                    <h2>Welcome!</h2>
                    <h3>Full Stack Web Development</h3>
                </Container>
            </DarkThemeProvider>
        </Provider>
    );
}

export default App;