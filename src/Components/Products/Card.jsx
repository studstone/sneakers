import React from 'react';
import Like from './Like';
import { ButtonAdd, ButtonLike, CardImage, CardWrapper, Price, PriceNumber, SneakersName } from './styles/StyleCard';

const Card = ({ liked, likedCard, addCart }) => {


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
                        <ButtonAdd
                            check={card.cart}
                            onClick={() => {
                                addCart(card.id);
                                console.log(card);
                            }}
                        />
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
