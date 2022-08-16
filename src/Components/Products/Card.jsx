import React from 'react';
import Like from './Like';
import { ButtonLike, CardImage, CardWrapper, Price, PriceNumber, SneakersName } from './styles/StyleCard';

const Card = ({ cards }) => {
    console.log();
    return (
        <>
            {
                cards.map((card, index) =>
                    <CardWrapper
                        key={index}
                    >
                        <ButtonLike>
                            <Like />
                        </ButtonLike>
                        <CardImage src={card.src} alt={card.alt} />
                        <SneakersName>{card.name}</SneakersName>
                        <Price>{card.price}</Price>
                        <PriceNumber>{card.priceNumber}</PriceNumber>
                    </CardWrapper>
                )
            }
        </>
    );
};

export default Card;
