import React from 'react';
import Arrow from '../Favorites/Arrow';
import { LinkHome } from '../Favorites/styles/StyleFavorites';
import Card from './CardOrders';
import {
    Attention,
    Blur, Butoon, Description, DottedLine, EmptyWrapper, OrdersTitle, OrdersWrapper, Price, PriceName, Purchases,
    TotalPrice
} from './style/StyleOrders';

const Orders = ({ addCart, cardsOrders, delToOrders }) => {
    console.log();
    return (
        <>
            <Blur />
            <OrdersWrapper
            >
                <OrdersTitle>Корзина</OrdersTitle>
                {
                    cardsOrders.lenght ?
                        <>
                            <Purchases>
                                <Card
                                    addCart={addCart}
                                    cardsOrders={cardsOrders}
                                    delToOrders={delToOrders}
                                />
                            </Purchases>
                            <TotalPrice>
                                <PriceName>Итого:</PriceName>
                                <DottedLine />
                                <Price>21 498 руб. </Price>
                            </TotalPrice>
                            <TotalPrice>
                                <PriceName>Налог 5%:</PriceName>
                                <DottedLine />
                                <Price>1074 руб. </Price>
                            </TotalPrice>
                            <Butoon>
                                Оформить заказ
                                <Arrow />
                            </Butoon>
                        </> :
                        <EmptyWrapper>
                            <img src="./images/emoji-2.png" alt="Emogi" />
                            <Attention>Корзина пустая</Attention>
                            <Description>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</Description>
                            <LinkHome href="#">
                                <Arrow />
                                Вернуться назад
                            </LinkHome>
                        </EmptyWrapper>
                }
            </OrdersWrapper>
        </>
    );
};

export default Orders;
