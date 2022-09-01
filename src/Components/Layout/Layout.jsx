import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Orders from '../Orders/Orders';

const Layout = ({ vivibilityOrders, orders, liked }) => {
    console.log();
    return (
        <>
            <NavBar
                {...vivibilityOrders}
                {...orders}
            />
            <Outlet />
            <Orders
                {...liked}
                {...orders}
                {...vivibilityOrders}
            />
        </>
    );
};

export default Layout;
