import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Arrow from './Arrow';
import Card from './Card';
import {
    AttentionSpan, CardContainer, ClarificationText, FavoritesTop, LinkHome, MEmojiContainer,
    ProductTitle, ProductWrapper
} from './styles/StyleFavorites';

const Favorites = ({ likedCard, cardsFavorites, delElArr }) => {
    console.log();

    const animation = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1
        }
    };

    return (
        <>
            {
                cardsFavorites.length ?
                    <ProductWrapper>
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
                    </ProductWrapper> :
                    <AnimatePresence>
                        <MEmojiContainer
                            initial={animation.hidden}
                            animate={animation.visible}
                            exit={animation.hidden}
                            transition={{ duration: 0.4 }}
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
