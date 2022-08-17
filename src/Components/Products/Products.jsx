import React from 'react';
import Card from './Card';
import { CardContainer, ProductTitle, ProductWrapper } from './styles/StyleProduct';

const Products = ({ cards }) => {
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

export default Products;
