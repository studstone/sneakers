import styled from "styled-components";
import { variable } from "../../Styled/Variable";
import checked from '../../../images/check.svg';
import plus from '../../../images/plus.svg';

export const CardWrapper = styled.div`
    position: relative;
    padding: 2rem 2.9rem 3.4rem 3rem;
    display: flex;
    flex-direction: column;
    width: 21rem;
    height: 26rem;
    border: 1px solid #F3F3F3;
    border-radius: 4rem;
    overflow: hidden;
    transition: box-shadow 0.4s ease-in-out, transform 0.4s ease-in-out;

    :hover {
        box-shadow: 0px 14px 14px #ceecff;
        transform: translateY(-1rem);
    }
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
    left: 3rem;
    width: 3.2rem;
    height: 3.2rem;
    border: ${props => (props.liked ? 'none' : '1px solid #e4e4e4')};
    border-radius: 7px;
    background-color: ${props => (props.liked ? '#FEF0F0' : 'transparent')};
    transition: border 0.4s ease-in-out, background-color 0.4s ease-in-out;

    svg {
        width: 14px;
        height: 14px;
        stroke: ${props => (props.liked ? 'none' : '#ECECEC')};
        stroke-width: 1.4px;
        fill: ${props => (props.liked ? '#FF8585' : 'none')};
        transition: stroke 0.4s ease-in-out, fill 0.4s ease-in-out;
    }

    :hover{
        border: ${props => (props.liked ? 'none' : '1px solid #9c9c9c')};
        background-color: ${props => (props.liked ? '#ffd9d9' : 'transparent')};

        svg {
            stroke: ${props => (props.liked ? 'none' : '#9c9c9c')};
            fill: ${props => (props.liked ? '#ff5656' : 'none')};
        }
    }
`;

export const ButtonAdd = styled.button`
    position: absolute;
    bottom: 3.4rem;
    right: 2.9rem;
    width: 3.2rem;
    height: 3.2rem;
    background: ${props => (props.check ? `url(${checked}), linear-gradient(180deg, #89F09C 0%, #3CC755 100%)` :
        `url(${plus}), transparent`)};
    border-radius: 8px;
    background-position: center;
    background-repeat: no-repeat;
    border: ${props => (props.check ? 'none' : '1px solid #e4e4e4')};
    transition: transform 0.4s ease-in-out, background 0.4s ease-in-out;

    :hover {
        transform: scale(1.2);
    }
`;
