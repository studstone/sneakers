import React from "react";
import Favorites from "./Components/Favorites/Favorites";
import NavBar from "./Components/NavBar/NavBar";
import Products from "./Components/Products/Products";
import GlobalStyle, { Wrapper } from "./Components/Styled/GlobalStyle";
import { cards } from "./DB/DBItems";
import useLiked from "./Hooks/useLiked";
import './style/index.scss';

const App = () => {
    const favorites = useLiked(cards);

    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <NavBar />
                <Products cards={favorites} />
                <Favorites cards={favorites} />
            </Wrapper>
        </>
    );
};

export default App;
