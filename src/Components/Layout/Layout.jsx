import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Orders from '../Orders/Orders';
import GlobalStyle, { Wrapper } from '../Styled/GlobalStyle';

const Layout = ({ vivibilityOrders, favorites, orders, liked, animationPages }) => {
    console.log();
    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <NavBar
                    {...vivibilityOrders}
                    {...orders}
                    {...favorites}
                />
                <Outlet />
                <Orders
                    animationPages={animationPages}
                    {...liked}
                    {...orders}
                    {...vivibilityOrders}
                />
            </Wrapper>
        </>
    );
};

export default Layout;
