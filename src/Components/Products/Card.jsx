import React from 'react';
import Like from './Like';
import { ButtonAdd, ButtonLike, CardImage, CardWrapper, Price, PriceNumber, SneakersName } from './styles/StyleCard';

const Card = ({ liked, likedCard, addCart, addToArr, delElArr }) => {
    console.log();
    return (
        <>
            {
                liked.map((card, i) =>
                    <CardWrapper
                        key={card.id}
                    >
                        <ButtonLike
                            liked={card.liked}
                            onClick={() => {
                                likedCard(card.id);
                                card.liked ? addToArr(card) : delElArr(i);
                            }}
                        >
                            <Like />
                        </ButtonLike>
                        <ButtonAdd
                            check={card.cart}
                            onClick={() => {
                                addCart(card.id);
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
