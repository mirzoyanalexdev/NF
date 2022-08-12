import { FC } from "react"
import styled from "styled-components"
import { ImgComponent } from "../Img"

interface ExchangeCartProps {
    id: number
    img: string
}

const ExchangeContainer = styled.div`
    width: 100%;
    margin: 60px 11px 60px 11px;
    cursor: pointer;
    text-align: center;
    display: flex;
    justify-content: center;
    height: 70px;
`;

export const ExchangeCart: FC<ExchangeCartProps> = ({id, img}) => {
    return (
        <ExchangeContainer key={id}>
           <ImgComponent src={img} />
        </ExchangeContainer>
    )
}