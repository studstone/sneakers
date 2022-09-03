import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import Card from './Card';
import SearchIcon from './Search';
import { CardContainer, MProductWrapper, ProductTitle, SearhWrepper } from './styles/StyleProduct';

const Products = ({ cards, favorites, orders, animationPages }) => {
    console.log();
    const [searchValue, setSearchValue] = useState('');

    const onChangeSearchInput = event => setSearchValue(event.target.value);

    return (
        <AnimatePresence>
            <MProductWrapper
                initial={animationPages.hidden}
                animate={animationPages.visible}
                exit={animationPages.hidden}
                transition={{ duration: 0.5 }}
            >
                <ProductTitle>
                    {searchValue ? `Поиск по запросу '${searchValue}'` : 'Все кроссовки'}
                </ProductTitle>
                <SearhWrepper>
                    <SearchIcon />
                    <input onChange={onChangeSearchInput} type="text" placeholder='Поиск...' />
                </SearhWrepper>
                <CardContainer>
                    <Card
                        {...cards}
                        {...favorites}
                        {...orders}
                        searchValue={searchValue}
                    />
                </CardContainer>
            </MProductWrapper>
        </AnimatePresence>
    );
};

export default Products;
