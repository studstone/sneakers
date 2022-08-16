import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import GlobalStyle, { Wrapper } from "./Components/Styled/GlobalStyle";
import './style/index.scss';

const App = () => (
    <>
        <GlobalStyle />
        <Wrapper>
            <NavBar />
        </Wrapper>
    </>
);

export default App;
