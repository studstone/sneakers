import { AnimatePresence } from 'framer-motion';
import React from 'react';
import Card from './Card';
import { CardContainer, MProductWrapper, ProductTitle } from './styles/StyleProduct';

const Products = ({ cards, favorites, orders, animationPages }) => {
    console.log();

    return (
        <AnimatePresence>
            <MProductWrapper
                initial={animationPages.hidden}
                animate={animationPages.visible}
                exit={animationPages.hidden}
                transition={{ duration: 0.5 }}
            >
                <ProductTitle>Все кроссовки</ProductTitle>
                <CardContainer>
                    <Card
                        {...cards}
                        {...favorites}
                        {...orders}
                    />
                </CardContainer>
            </MProductWrapper>
        </AnimatePresence>
    );
};

export default Products;
