import { AnimatePresence } from 'framer-motion';
import React from 'react';
import Arrow from '../../Pages/Favorites/Arrow';
import { LinkHome } from '../../Pages/Favorites/styles/StyleFavorites';
import Card from './CardOrders';
import {
    Attention, Butoon, Description, DottedLine, EmptyWrapper, MBlur, MOrdersWrapper,
    OrdersTitle, Price, PriceName, Purchases, TotalPrice
} from './style/StyleOrders';

const Orders = ({ addCart, cardsOrders, delToOrders,
    isVisibileOrders, hendleVisibility }) => {
    console.log();

    const ordersWrapperAnimation = {
        hidden: {
            right: -385,
            height: 0,
            opacity: 0
        },
        visible: {
            right: 0,
            height: '100%',
            opacity: 1
        }
    };

    const BlurAnimation = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1
        }
    };

    const totalCounter = cardsOrders.reduce((res, order) =>
        order.priceNumber + res, 0);

    const totalCounterPercent = Math.ceil(cardsOrders.reduce((res, order) =>
        order.priceNumber * 0.05 + res, 0));

    return (
        <>
            <AnimatePresence>
                {
                    isVisibileOrders &&
                    <MBlur
                        initial={BlurAnimation.hidden}
                        animate={BlurAnimation.visible}
                        exit={BlurAnimation.hidden}
                        transition={{ duration: 0.4 }}
                        onClick={hendleVisibility}
                    />
                }
            </AnimatePresence>
            <AnimatePresence>
                {
                    isVisibileOrders && (
                        <MOrdersWrapper
                            initial={ordersWrapperAnimation.hidden}
                            animate={ordersWrapperAnimation.visible}
                            exit={ordersWrapperAnimation.hidden}
                            transition={{ duration: 0.4 }}
                        >
                            <OrdersTitle>Корзина</OrdersTitle>
                            {
                                cardsOrders.length > 0 ?
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
                                            <Price>{totalCounter} руб.</Price>
                                        </TotalPrice>
                                        <TotalPrice>
                                            <PriceName>Налог 5%:</PriceName>
                                            <DottedLine />
                                            <Price>{totalCounterPercent} руб.</Price>
                                        </TotalPrice>
                                        <Butoon>
                                            Оформить заказ
                                            <Arrow />
                                        </Butoon>
                                    </> :
                                    <EmptyWrapper>
                                        <img src="./images/emoji-2.png" alt="Emogi" />
                                        <Attention>Корзина пустая</Attention>
                                        <Description>
                                            Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
                                        </Description>
                                        <LinkHome
                                            to='#'
                                            onClick={hendleVisibility}
                                        >
                                            <Arrow />
                                            Вернуться назад
                                        </LinkHome>
                                    </EmptyWrapper>
                            }
                        </MOrdersWrapper>
                    )
                }
            </AnimatePresence>
        </>
    );
};

export default Orders;
