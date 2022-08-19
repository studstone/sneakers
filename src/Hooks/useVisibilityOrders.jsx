import { useState } from 'react';

const useVisibilityOrders = () => {
    const [isVisibileOrders, setIsVisibileOrders] = useState(false);

    const hendleVisibility = () => setIsVisibileOrders(!isVisibileOrders);

    return { isVisibileOrders, hendleVisibility };
};

export default useVisibilityOrders;
