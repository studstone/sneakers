import styled from "styled-components";
import { variable } from "../../../Components/Styled/Variable";
import ArrowLink from '../../../images/arrow-link.svg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const ProductWrapper = styled.div`
    padding: 4.5rem 6rem 2.4rem 6rem;
    min-height: 100vh;
`;

export const FavoritesTop = styled.div`
    display: flex;
    align-items: center;
    width: 100%;

    a {
        width: 3.5rem;
            height: 3.5rem;
            border: 1px solid #F2F2F2;
            border-radius: 8px;
            margin-right: 2.1rem;
            background-image: url(${ArrowLink});
            background-position: center;
            background-repeat: no-repeat;
            transition: margin-right 0.4s ease-in-out, transform 0.4s ease-in-out, border 0.4s ease-in-out;

            :hover {
                margin-right: 5rem;
                transform: scale(1.2);
                border: 1px solid #b8b8b8;
            }
    }
`;

export const ProductTitle = styled.h1`
    font-size: 3.2rem;
    line-height: 3.9rem;  
`;

export const CardContainer = styled.div`
    margin-top: 4rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 2.0rem 4.0rem;
`;

export const EmojiContainer = styled.div`
    padding: 29.6rem 39.5rem 31.6rem 39.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
        width: 7rem;
        height: 7rem;
        margin-bottom: 2.4rem;
    }
`;

export const AttentionSpan = styled.h3`
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 2.9rem;
    margin-bottom: 1.1rem;
`;

export const ClarificationText = styled.p`
    font-size: 1.6rem;
    line-height: 1.9rem;
    opacity: 0.4;
    margin-bottom: 7rem;
`;

export const LinkHome = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24.5rem;
    background-color: ${variable.linkBgColor};
    border-radius: 1.8rem;
    padding: 1.8rem 0;
    text-align: center;
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: white;

    svg {
        margin-right: 1.5rem;
    }
`;

export const MEmojiContainer = motion(EmojiContainer);
