import styled from "styled-components";
import DelImg from '../../../images/plus.svg';

export const CardWrapper = styled.div`
    padding: 2rem 2rem 2.9rem 2rem;
    display: flex;
    align-items: center;
    border: 1px solid #F3F3F3;
    border-radius: 20px;
    margin-bottom: 2rem;
`;

export const CardImg = styled.img`
    width: 7rem;
    height: 7rem;
    margin-right: 2.1rem;
`;

export const DescriptionCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 15rem;
    margin-right: 1.5rem;
`;

export const NameSneacers = styled.p`
    font-size: 13px;
    line-height: 17px;
    margin-bottom: 0.8rem;
`;

export const CardPrice = styled.span`
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
`;

export const ButtonDel = styled.button`
    width: 3.2rem;
    height: 3.2rem;
    background-color: transparent;
    background-image: url(${DelImg});
    background-position: center;
    background-repeat: no-repeat;
    border: 1px solid #DBDBDB;
    border-radius: 8px;
`;
