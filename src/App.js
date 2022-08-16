import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Products from "./Components/Products/Products";
import GlobalStyle, { Wrapper } from "./Components/Styled/GlobalStyle";
import './style/index.scss';

const App = () => (
    <>
        <GlobalStyle />
        <Wrapper>
            <NavBar />
            <Products />
        </Wrapper>
    </>
);

export default App;
