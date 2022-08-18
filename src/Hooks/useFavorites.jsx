import { useState } from "react";

const useFavorites = () => {
    const [cardsFavorites, setCardsFavorites] = useState([]);

    const addToArr = el => {
        setCardsFavorites([...cardsFavorites, el]);
    };

    const delElArr = index => {
        cardsFavorites.splice(index, 1);
    };

    return { cardsFavorites, addToArr, delElArr };
};

export default useFavorites;
