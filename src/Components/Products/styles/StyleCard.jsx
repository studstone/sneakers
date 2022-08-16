import styled from "styled-components";
import { variable } from "../../Styled/Variable";

export const CardWrapper = styled.div`
    position: relative;
    padding: 2rem 2.9rem 3.4rem 3rem;
    display: flex;
    flex-direction: column;
    height: 26rem;
    border: 1px solid #F3F3F3;
    border-radius: 40px;
    overflow: hidden;
`;

export const CardImage = styled.img`
    width: 13.3rem;
    height: 11.2rem;
    margin-bottom: 1.4rem;
    align-self: center;
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

export const ButtonLike = styled.button`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 2rem;
    left: 3.4rem;
    width: 3.2rem;
    height: 3.2rem;
    border: 1px solid #F8F8F8;
    border-radius: 7px;
    background-color: ${props => (props.liked ? '#FEF0F0' : 'transparent')};

    svg {
        width: 14px;
        height: 14px;
        stroke: ${props => (props.liked ? 'none' : '#ECECEC')};
        stroke-width: 1.4px;
        fill: ${props => (props.liked ? '#FF8585' : 'none')};
        transition: stroke 0.4s ease-in-out, fill 0.4s ease-in-out;
    }
`;
