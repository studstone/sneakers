import { useState } from 'react';
import { cards } from '../DB/DBItems';

const useLiked = () => {
    const cardsLocal = JSON.parse(localStorage.getItem("cards"));


    const [liked, setLiked] = useState(cardsLocal || cards);

    localStorage.setItem('cards', JSON.stringify(liked));


    const likedCard = index => {
        setLiked(liked.map((card, i) => {
            if (i === index) {
                card.liked = !card.liked;
            }

            return card;
        }));
    };

    const addCart = index => {
        setLiked(liked.map((card, i) => {
            if (i === index) {
                card.cart = !card.cart;
            }

            return card;
        }));
    };

    return { liked, likedCard, addCart };
};

export default useLiked;
