import React from 'react';
import { ButtonDel, CardImg, CardPrice, CardWrapper, DescriptionCard, NameSneacers } from './style/StyleCard';

const Card = ({ addCart, cardsOrders, delToOrders }) => {
    console.log(cardsOrders);

    return (
        <>
            {
                cardsOrders.map((card, i) =>
                    <CardWrapper key={card.id}>
                        <CardImg src={card.src} alt={card.alt} />
                        <DescriptionCard>
                            <NameSneacers>{card.name}</NameSneacers>
                            <CardPrice>{card.priceNumber} руб.</CardPrice>
                        </DescriptionCard>
                        <ButtonDel
                            onClick={() => {
                                addCart(card.id);
                                delToOrders(i);
                            }}
                        />
                    </CardWrapper>
                )
            }
        </>
    );
};

export default Card;
