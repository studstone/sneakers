import React from 'react';
import useLiked from '../../Hooks/useLiked';
import Card from './Card';
import { CardContainer, ProductTitle, ProductWrapper } from './styles/StyleProduct';

const Products = ({ cards }) => {
    console.log();

    const liked = useLiked(cards);
    return (
        <ProductWrapper>
            <ProductTitle>Все кроссовки</ProductTitle>
            <CardContainer>
                <Card {...liked} />
            </CardContainer>
        </ProductWrapper>
    );
};

export default Products;
