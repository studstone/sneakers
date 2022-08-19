import styled from "styled-components";
import { variable } from "../../Styled/Variable";

export const Blur = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2px);
`;

export const OrdersWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 38.5rem;
    height: 100%;
    padding: 3rem;
    background-color: ${variable.wrapperBgColor};
    box-shadow: -10px 4px 24px rgba(0, 0, 0, 0.1);

    img {
        width: 12rem;
        height: 12rem;
        margin-bottom: 2.1rem;
    }
`;

export const OrdersTitle = styled.h1`
    margin-bottom: 3rem;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
`;

export const Purchases = styled.div`
    margin-bottom: 2rem;
    margin-bottom: auto;
`;

export const TotalPrice = styled.div`
    display: flex;
    align-items: baseline;
`;

export const PriceName = styled.span`
    font-size: 16px;
    line-height: 19px;
    margin-right: 1rem;

    :first-child {
        margin-bottom: 1.9rem;
    }

    :last-child {
        margin-bottom: 2.4rem;
    }
`;

export const Price = styled.span`
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    margin-left: 1rem;
`;

export const DottedLine = styled.span`
    height: 0.1rem;
    border-bottom: 1px dashed #DFDFDF;
    flex: 1;
`;

export const Butoon = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32.5rem;
    height: 5.5rem;
    background-color: ${variable.linkBgColor};
    border-radius: 18px;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: white;

    svg {
        transform: rotate(180deg);
        margin-left: 1.5rem;
    }
`;

export const Attention = styled.h1`
    font-weight: 600;
    font-size: 22px;
    line-height: 27px;
    margin-bottom: 0.9rem;
`;

export const Description = styled.p`
    font-size: 16px;
    line-height: 24px;
    opacity: 0.4;
    margin-bottom: 4rem;
    text-align: center;
`;

export const EmptyWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
