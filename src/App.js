import React from "react";
import { Routes, Route } from 'react-router-dom';
import Favorites from "./Pages/Favorites/Favorites";
import Layout from "./Components/Layout/Layout";
import Products from "./Pages/Products/Products";
// import GlobalStyle, { Wrapper } from "./Components/Styled/GlobalStyle";
import useFavorites from "./Hooks/useFavorites";
import useLiked from "./Hooks/useLiked";
import useOrders from "./Hooks/useOrders";
import useVisibilityOrders from "./Hooks/useVisibilityOrders";
import './style/index.scss';

const App = () => {
    const liked = useLiked();
    const favorites = useFavorites();
    const orders = useOrders();
    const vivibilityOrders = useVisibilityOrders();

    return (
        <>
            <Routes>
                <Route path="/"
                    element={
                        <Layout
                            vivibilityOrders={vivibilityOrders}
                            orders={orders}
                            liked={liked}
                        />
                    }
                >
                    <Route index
                        element={
                            <Products
                                cards={liked}
                                favorites={favorites}
                                orders={orders}
                            />
                        }
                    />
                    <Route path="favorites"
                        element={
                            <Favorites
                                {...liked}
                                {...favorites}
                            />
                        }
                    />
                </Route>
            </Routes>
        </>
    );
};

export default App;
