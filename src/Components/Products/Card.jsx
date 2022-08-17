import React from 'react';
import Like from './Like';
import { ButtonLike, CardImage, CardWrapper, Price, PriceNumber, SneakersName } from './styles/StyleCard';

const Card = ({ liked, likedCard }) => {
    console.log();
    return (
        <>
            {
                liked.map(card =>
                    <CardWrapper
                        key={card.id}
                    >
                        <ButtonLike
                            liked={card.liked}
                            onClick={() => {
                                likedCard(card.id);
                            }}
                        >
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
