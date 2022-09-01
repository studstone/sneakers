import React from 'react';
import Like from './Like';
import { ButtonAdd, ButtonLike, CardImage, CardWrapper, Price, PriceNumber, SneakersName } from './styles/StyleCard';

const Card = ({ liked, likedCard, addCart, addToArr,
    addToOrders, cardsOrders, cardsFavorites }) => {

    const delToOrders = card => {
        cardsOrders.find((item, index) => (item.id === card.id && cardsOrders.splice(index, 1)));
    };

    const delToFavorites = card => {
        cardsFavorites.find((item, index) => (item.id === card.id && cardsFavorites.splice(index, 1)));
        localStorage.setItem('cardsFavorites', JSON.stringify(cardsFavorites));
    };





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
                                card.liked ? addToArr(card) : delToFavorites(card);
                            }}
                        >
                            <Like />
                        </ButtonLike>
                        <ButtonAdd
                            check={card.cart}
                            onClick={() => {
                                addCart(card.id);
                                card.cart ? addToOrders(card) : delToOrders(card);
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
