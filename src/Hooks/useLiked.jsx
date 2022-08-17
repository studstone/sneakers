import { useState } from 'react';
import { cards } from '../DB/DBItems';

const useLiked = () => {

    const [liked, setLiked] = useState(cards);

    const likedCard = index => {
        setLiked(cards.map((card, i) => {
            if (i === index) {
                card.liked = !card.liked;
            }

            return card;
        }));
    };

    return { liked, likedCard };
};

export default useLiked;
