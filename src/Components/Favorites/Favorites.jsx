import React from 'react';
import Arrow from './Arrow';
import Card from './Card';
import {
    AttentionSpan, CardContainer, ClarificationText, EmojiContainer, FavoritesTop, LinkBack, LinkHome,
    ProductTitle, ProductWrapper
} from './styles/StyleFavorites';

const Favorites = ({ cards }) => {

    const favorites = cards.liked.filter(card => card.liked);

    return (
        <>
            {
                favorites.length ?
                    <ProductWrapper>
                        <FavoritesTop>
                            <LinkBack href="#" />
                            <ProductTitle>Мои закладки</ProductTitle>
                        </FavoritesTop>
                        <CardContainer>
                            <Card {...cards} favorites={favorites} />
                        </CardContainer>
                    </ProductWrapper> :
                    <EmojiContainer>
                        <img src="/images/emoji-1.png" alt="Emogi" />
                        <AttentionSpan>Закладок нет :(</AttentionSpan>
                        <ClarificationText>Вы ничего не добавляли в закладки</ClarificationText>
                        <LinkHome href="#">
                            <Arrow />
                            Вернуться назад
                        </LinkHome>
                    </EmojiContainer>
            }

        </>

    );
};

export default Favorites;
