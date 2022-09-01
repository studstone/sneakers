import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Arrow from './Arrow';
import Card from './Card';
import {
    AttentionSpan, CardContainer, ClarificationText,
    FavoritesTop, LinkHome, MEmojiContainer, ProductTitle
} from './styles/StyleFavorites';
import { MProductWrapper } from '../Products/styles/StyleProduct';

const Favorites = ({ likedCard, cardsFavorites, delElArr, animationPages }) => {
    console.log();

    return (
        <>
            {
                cardsFavorites.length ?
                    <MProductWrapper
                        initial={animationPages.hidden}
                        animate={animationPages.visible}
                        exit={animationPages.hidden}
                        transition={{ duration: 0.5 }}
                    >
                        <FavoritesTop>
                            <Link to='/' />
                            <ProductTitle>Мои закладки</ProductTitle>
                        </FavoritesTop>
                        <CardContainer>
                            <Card
                                cardsFavorites={cardsFavorites}
                                likedCard={likedCard}
                                delElArr={delElArr}
                            />
                        </CardContainer>
                    </MProductWrapper> :
                    <AnimatePresence>
                        <MEmojiContainer
                            initial={animationPages.hidden}
                            animate={animationPages.visible}
                            exit={animationPages.hidden}
                            transition={{ duration: 0.5 }}
                        >
                            <img src="/images/emoji-1.png" alt="Emogi" />
                            <AttentionSpan>Закладок нет :(</AttentionSpan>
                            <ClarificationText>Вы ничего не добавляли в закладки</ClarificationText>
                            <LinkHome to='/'>
                                <Arrow />
                                Вернуться назад
                            </LinkHome>
                        </MEmojiContainer>
                    </AnimatePresence>
            }
        </>
    );
};

export default Favorites;
