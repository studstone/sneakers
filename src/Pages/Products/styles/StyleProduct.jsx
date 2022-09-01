import styled from "styled-components";
import { motion } from 'framer-motion';

export const ProductWrapper = styled.div`
    padding: 4.5rem 6rem 2.4rem 6rem;
    min-height: 100vh;
`;

export const ProductTitle = styled.h1`
    font-size: 3.2rem;
    line-height: 3.9rem;  
`;

export const CardContainer = styled.div`
    margin-top: 4rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    gap: 20px 40px;
`;

export const MProductWrapper = motion(ProductWrapper);
