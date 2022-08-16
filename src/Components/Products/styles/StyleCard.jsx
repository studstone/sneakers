import styled from "styled-components";
import { variable } from "../../Styled/Variable";

export const CardWrapper = styled.div`
    padding: 2rem 2.9rem 3.4rem 3rem;
    display: flex;
    flex-direction: column;
    width: 21rem;
    height: 26rem;
    border: 1px solid #F3F3F3;
    border-radius: 40px;
    overflow: hidden;
`;

export const CardImage = styled.img`
    width: 13.3rem;
    height: 11.2rem;
    margin-bottom: 1.4rem;
`;

export const SneakersName = styled.p`
    font-size: 1.4rem;
    line-height: 1.7rem;  
    margin-bottom: 1.4rem;
`;

export const Price = styled.span`
    color: ${variable.secondaryTextColor};
    font-weight: 500;
    font-size: 1.1rem;
    line-height: 1.3rem;
    text-transform: uppercase;
    margin-bottom: 0.2rem;
`;

export const PriceNumber = styled.span`
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 1.7rem;
`;
