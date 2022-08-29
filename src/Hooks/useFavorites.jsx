import { useState } from "react";

const useFavorites = () => {
    const cardsFovoritesLockal = JSON.parse(localStorage.getItem("cardsFavorites"));

    const [cardsFavorites, setCardsFavorites] = useState(cardsFovoritesLockal || []);

    localStorage.setItem('cardsFavorites', JSON.stringify(cardsFavorites));

    const addToArr = el => {
        setCardsFavorites([...cardsFavorites, el]);
    };

    const delElArr = index => {
        cardsFavorites.splice(index, 1);
    };

    return { cardsFavorites, addToArr, delElArr };
};

export default useFavorites;
