import React from "react";
// import Favorites from "./Components/Favorites/Favorites";
import NavBar from "./Components/NavBar/NavBar";
import Orders from "./Components/Orders/Orders";
import Products from "./Components/Products/Products";
import GlobalStyle, { Wrapper } from "./Components/Styled/GlobalStyle";
import { cards } from "./DB/DBItems";
import useFavorites from "./Hooks/useFavorites";
import useLiked from "./Hooks/useLiked";
import useOrders from "./Hooks/useOrders";
import './style/index.scss';

const App = () => {
    const liked = useLiked(cards);
    const favorites = useFavorites();
    const orders = useOrders();

    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <NavBar />
                <Products
                    cards={liked}
                    favorites={favorites}
                    orders={orders}
                />
                {/* <Favorites
                    {...liked}
                    {...favorites}
                /> */}
                <Orders
                    {...liked}
                    {...orders}
                />
            </Wrapper>
        </>
    );
};

export default App;
