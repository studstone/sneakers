import { AnimatePresence } from 'framer-motion';
import React from 'react';
import Arrow from '../../Pages/Favorites/Arrow';
import { LinkHome } from '../../Pages/Favorites/styles/StyleFavorites';
import Card from './CardOrders';
import {
    Attention, Butoon, Description, DottedLine, MBlur, MEmptyWrapper, MOrdersWrapper,
    OrdersTitle, Price, PriceName, Purchases, TotalPrice
} from './style/StyleOrders';

const Orders = ({ addCart, cardsOrders, delToOrders,
    isVisibileOrders, hendleVisibility, animationPages }) => {
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
                            <OrdersTitle>??????????????</OrdersTitle>
                            {
                                cardsOrders.length ?
                                    <>
                                        <Purchases>
                                            <Card
                                                addCart={addCart}
                                                cardsOrders={cardsOrders}
                                                delToOrders={delToOrders}
                                            />
                                        </Purchases>
                                        <TotalPrice>
                                            <PriceName>??????????:</PriceName>
                                            <DottedLine />
                                            <Price>{totalCounter} ??????.</Price>
                                        </TotalPrice>
                                        <TotalPrice>
                                            <PriceName>?????????? 5%:</PriceName>
                                            <DottedLine />
                                            <Price>{totalCounterPercent} ??????.</Price>
                                        </TotalPrice>
                                        <Butoon>
                                            ???????????????? ??????????
                                            <Arrow />
                                        </Butoon>
                                    </> :
                                    <MEmptyWrapper
                                        initial={animationPages.hidden}
                                        animate={animationPages.visible}
                                        exit={animationPages.hidden}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <img src="./images/emoji-2.png" alt="Emogi" />
                                        <Attention>?????????????? ????????????</Attention>
                                        <Description>
                                            ???????????????? ???????? ???? ???????? ???????? ??????????????????, ?????????? ?????????????? ??????????.
                                        </Description>
                                        <LinkHome
                                            to='#'
                                            onClick={hendleVisibility}
                                        >
                                            <Arrow />
                                            ?????????????????? ??????????
                                        </LinkHome>
                                    </MEmptyWrapper>
                            }
                        </MOrdersWrapper>
                    )
                }
            </AnimatePresence>
        </>
    );
};

export default Orders;
