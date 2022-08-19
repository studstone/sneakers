import React from 'react';
import Cart from './Cart';
import Heart from './Heart';
import { DescriptionTitle, Header, HeaderTitle, Logo, TitleWrapper, TotalPrice } from './styles/StyleNavbar';
import User from './User';

const NavBar = ({ hendleVisibility }) => (
    <Header>
        <Logo src='./images/logo.png' alt='Logo' />
        <TitleWrapper>
            <HeaderTitle>REACT SNEAKERS</HeaderTitle>
            <DescriptionTitle>Магазин лучших кроссовок</DescriptionTitle>
        </TitleWrapper>
        <Cart />
        <TotalPrice
            onClick={hendleVisibility}
        >
            1205 руб.
        </TotalPrice>
        <Heart />
        <User />
    </Header>
);

export default NavBar;
