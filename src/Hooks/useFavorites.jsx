import { useState } from "react";

const useFavorites = () => {
    const [cardsFavorites, setCardsFavorites] = useState([]);

    const addToArr = el => {
        setCardsFavorites([...cardsFavorites, el]);
    };

    return { cardsFavorites, addToArr };
};

export default useFavorites;
