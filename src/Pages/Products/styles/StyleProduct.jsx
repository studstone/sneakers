import styled from "styled-components";
import { motion } from 'framer-motion';

export const ProductWrapper = styled.div`
    padding: 4.5rem 6rem 2.4rem 6rem;
    display: flex;
    flex-wrap: wrap;
`;

export const ProductTitle = styled.h1`
    font-size: 3.2rem;
    line-height: 3.9rem;  
    margin-right: auto;
`;

export const CardContainer = styled.div`
    margin-top: 4rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    gap: 20px 40px;
`;

export const SearhWrepper = styled.div`
    display: flex;
    align-items: center;
    padding: 1.3rem;
    width: 25rem;
    border: 1px solid #F3F3F3;
    border-radius: 10px;

    svg {
        margin-right: 1.3rem;
    }

    input {
        flex: 1;
        outline: none;
        border: none;
        font-size: 14px;
        line-height: 17px;
        color: #C4C4C4;
    }
`;

export const MProductWrapper = motion(ProductWrapper);
