import React from 'react';
import Like from './Like';
import { ButtonAdd, ButtonLike, CardImage, CardWrapper, Price, PriceNumber, SneakersName } from './styles/StyleCard';

const Card = ({ likedCard, cardsFavorites, delElArr }) => {
    console.log();


    return (
        <>
            {
                cardsFavorites.map((card, i) =>
                    <CardWrapper
                        key={card.id}
                    >
                        <ButtonLike
                            liked={card.liked}
                            onClick={() => {
                                likedCard(card.id);
                                delElArr(i);
                            }}
                        >
                            <Like />
                        </ButtonLike>
                        <ButtonAdd />
                        <CardImage src={card.src} alt={card.alt} />
                        <SneakersName>{card.name}</SneakersName>
                        <Price>{card.price}</Price>
                        <PriceNumber>{card.priceNumber} руб.</PriceNumber>
                    </CardWrapper>
                )
            }
        </>
    );
};

export default Card;
