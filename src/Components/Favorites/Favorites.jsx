import React from 'react';
import Card from './Card';
import { CardContainer, ProductTitle, ProductWrapper } from './styles/StyleProduct';

const Favorites = ({ cards }) => {
    console.log();

    return (
        <ProductWrapper>
            <ProductTitle>Все кроссовки</ProductTitle>
            <CardContainer>
                <Card {...cards} />
            </CardContainer>
        </ProductWrapper>
    );
};

export default Favorites;
