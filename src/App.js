import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Products from "./Components/Products/Products";
import GlobalStyle, { Wrapper } from "./Components/Styled/GlobalStyle";
import { cards } from "./DB/DBItems";
import './style/index.scss';

const App = () => {

    console.log();

    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <NavBar />
                <Products cards={cards} />
            </Wrapper>
        </>
    );
};

export default App;
