import { useState } from "react";

const useOrders = () => {
    const [cardsOrders, setCardsOrderss] = useState([]);

    const addToOrders = el => {
        setCardsOrderss([...cardsOrders, el]);
    };

    const delToOrders = index => {
        cardsOrders.splice(index, 1);
    };

    return { cardsOrders, addToOrders, delToOrders };
};

export default useOrders;
