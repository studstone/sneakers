import React from 'react';
import Card from './Card';
import { CardContainer, ProductTitle, ProductWrapper } from './styles/StyleProduct';

const Products = ({ cards, favorites }) => {
    console.log();

    return (
        <ProductWrapper>
            <ProductTitle>Все кроссовки</ProductTitle>
            <CardContainer>
                <Card {...cards} {...favorites} />
            </CardContainer>
        </ProductWrapper>
    );
};

export default Products;
