import React from "react";
import Favorites from "./Components/Favorites/Favorites";
import NavBar from "./Components/NavBar/NavBar";
import Products from "./Components/Products/Products";
import GlobalStyle, { Wrapper } from "./Components/Styled/GlobalStyle";
import { cards } from "./DB/DBItems";
import useFavorites from "./Hooks/useFavorites";
import useLiked from "./Hooks/useLiked";
import './style/index.scss';

const App = () => {
    const liked = useLiked(cards);
    const favorites = useFavorites();

    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <NavBar />
                <Products cards={liked} favorites={favorites} />
                <Favorites {...liked} {...favorites} />
            </Wrapper>
        </>
    );
};

export default App;
