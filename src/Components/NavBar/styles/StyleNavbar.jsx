import styled from "styled-components";
import { variable } from "../../Styled/Variable";

export const Header = styled.header`
    display: flex;
    align-items: center;
    padding: 4.3rem 6.3rem 4.5rem 4.5rem;
    border-bottom: 1px solid #EAEAEA;
    display: flex;
`;

export const Logo = styled.img`
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

export const TotalPrice = styled.span`
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.7rem;
    color: #5C5C5C;
    margin-right: 3rem;
    cursor: default;
`;
