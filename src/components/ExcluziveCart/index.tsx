import { FC } from "react"
import styled from "styled-components"
import { device } from "../../consts";
import { ImgComponent } from "../Img"

interface ExcluziveCartProps {
    id: number,
    title: string,
    price: string,
    name: string,
    imgUser: string,
    img: string,
    priceLogo: string
}

const ExcluziveContainer = styled.div`
    box-shadow: 12px 18px 30px rgba(0, 0, 0, 0.1);
    background: #F4F4F4;
    margin-bottom: 24px;
    border-radius: 20px;
    transition: 0.2s;
    color: ${props => props.theme.raisinBlack};
    @media ${device.tablet} {
        margin: 10px auto;
    }
`;

const ExcluziveDataDiv = styled.div`
    padding: 0 20px;
`;

const ExcluziveTitle = styled.h4`
    margin: 20px 0 10px 0;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 175.4%;
    letter-spacing: 0.02em;
    color: #232222;
`;

const ExcluzivePrice = styled.div`
    margin: 0 0 30px 0;
    gap: 10px;
    display: felx;
    align-items: center;
`;

const ExcluzivePriceTitle = styled.h4`
    margin: 0;
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 175.4%;
    letter-spacing: 0.02em;
    color: #FF8E1E;
`;

const ExcluziveUser = styled.div`
    margin: 0 0 10px 0;
    gap: 10px;
    display: flex;
    align-items: center;
`;

const ExcluziveUserTitle = styled.h4`
    margin: 0;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 175.4%;
    letter-spacing: 0.02em;
    color: #232222;
`;

export const ExcluziveCart: FC<ExcluziveCartProps> = ({id, title, price, imgUser, img, name, priceLogo}) => {
    return (
        <ExcluziveContainer key={id}>
            <ImgComponent src={img} />
            <ExcluziveDataDiv>
                <ExcluziveTitle>
                    {title}
                </ExcluziveTitle>
                    <ExcluzivePrice>
                        <ImgComponent src={priceLogo} />
                       <ExcluzivePriceTitle> $ {price} </ExcluzivePriceTitle>
                    </ExcluzivePrice>
                    <ExcluziveUser>
                        <ImgComponent src={imgUser} />
                        <ExcluziveUserTitle>{name}</ExcluziveUserTitle>
                    </ExcluziveUser>
            </ExcluziveDataDiv>
        </ExcluziveContainer>
    )
}