import React from 'react';
import Cart from './Cart';
import Heart from './Heart';
import {
    DescriptionTitle, Header, HeaderTitle,
    ItemCart, ItemHeart, ItemTotalPrice, ItemUser, LinkCustom, LinkLogo, TitleWrapper, TotalPrice
} from './styles/StyleNavbar';
import User from './User';

const NavBar = ({ hendleVisibility, cardsOrders }) => {
    console.log();

    const totalCounter = cardsOrders.reduce((res, order) =>
        order.priceNumber + res, 0);

    return (
        <Header>
            <LinkLogo to='/'>
                <img src='./images/logo.png' alt='Logo' />
            </LinkLogo>
            <TitleWrapper>
                <HeaderTitle>REACT SNEAKERS</HeaderTitle>
                <DescriptionTitle>Магазин лучших кроссовок</DescriptionTitle>
            </TitleWrapper>
            <ul>
                <ItemCart>
                    <LinkCustom to='/cart' className='link'>
                        <Cart />
                    </LinkCustom>
                </ItemCart>
                <ItemTotalPrice>
                    <TotalPrice
                        to='/'
                        onClick={hendleVisibility}
                    >
                        {totalCounter} руб.
                    </TotalPrice>
                </ItemTotalPrice>
                <ItemHeart>
                    <LinkCustom to='/favorites'>
                        <Heart />
                    </LinkCustom>
                </ItemHeart>
                <ItemUser>
                    <LinkCustom to='/user'>
                        <User />
                    </LinkCustom>
                </ItemUser>
            </ul>
        </Header>
    );
};

export default NavBar;




