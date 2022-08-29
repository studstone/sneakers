import { useState } from "react";

const useOrders = () => {
    const cardsOrdersLockal = JSON.parse(localStorage.getItem("cardsOrders"));


    const [cardsOrders, setCardsOrderss] = useState(cardsOrdersLockal || []);

    localStorage.setItem('cardsOrders', JSON.stringify(cardsOrders));

    const addToOrders = el => {
        setCardsOrderss([...cardsOrders, el]);
    };

    const delToOrders = index => {
        cardsOrders.splice(index, 1);
    };

    return { cardsOrders, addToOrders, delToOrders };
};

export default useOrders;
