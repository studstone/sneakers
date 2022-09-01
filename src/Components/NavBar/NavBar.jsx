import React from 'react';
import Cart from './Cart';
import Heart from './Heart';
import {
    DescriptionTitle, Header, HeaderTitle,
    ItemCart, ItemHeart, ItemTotalPrice, ItemUser, LinkCustom, LinkLogo, Signal, TitleWrapper, TotalPrice
} from './styles/StyleNavbar';
import User from './User';

const NavBar = ({ hendleVisibility, cardsOrders, cardsFavorites }) => {
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
            <nav>
                <ul>
                    <ItemCart>
                        <LinkCustom to='/cart' className='link'>
                            <Cart />
                            {cardsOrders.length ? <Signal></Signal> : null}
                        </LinkCustom>
                    </ItemCart>
                    <ItemTotalPrice>
                        <TotalPrice
                            onClick={hendleVisibility}
                        >
                            {totalCounter} руб.
                        </TotalPrice>
                    </ItemTotalPrice>
                    <ItemHeart>
                        <LinkCustom to='/favorites'>
                            <Heart />
                            {cardsFavorites.length ? <Signal></Signal> : null}
                        </LinkCustom>
                    </ItemHeart>
                    <ItemUser>
                        <LinkCustom to='/user'>
                            <User />
                        </LinkCustom>
                    </ItemUser>
                </ul>
            </nav>
        </Header>
    );
};

export default NavBar;




