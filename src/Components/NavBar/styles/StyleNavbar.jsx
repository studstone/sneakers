import styled from "styled-components";
import { Link } from 'react-router-dom';
import { variable } from "../../Styled/Variable";

export const Header = styled.header`
    display: flex;
    align-items: center;
    padding: 4.3rem 6.3rem 4.5rem 4.5rem;
    border-bottom: 1px solid #EAEAEA;
    display: flex;

    ul {
        display: flex;
        align-items: center;
    }
`;

export const LinkLogo = styled(Link)`
    width: 4rem;
    height: 4rem;
    margin-right: 1.6rem;
`;


export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: auto;
`;

export const HeaderTitle = styled.h1`
    color: ${variable.primaryTextColor};
    font-size: 2rem;
    line-height: 2.4rem;
    text-transform: uppercase;
`;

export const DescriptionTitle = styled.p`
    color: ${variable.secondaryTextColor};
    font-size: 1.4rem;
    line-height: 1.7rem;
`;

export const ItemCart = styled.li`
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
`;
export const LinkCustom = styled(Link)`
    display: block;
    width: 100%;
    height: 100%;
`;

export const ItemTotalPrice = styled.li`
    margin-right: 3rem;
`;

export const TotalPrice = styled.span`
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.7rem;
    color: #5C5C5C;
    cursor: pointer;
    transition: color 0.4s ease-in-out;

    :hover {
        color: red;
    }
`;

export const ItemHeart = styled.li`
    width: 2.2rem;
    height: 1.9rem;
    margin-right: 3rem;
`;

export const ItemUser = styled.li`
    width: 2rem;
    height: 2rem;
`;
