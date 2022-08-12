import { FC } from "react"
import styled from "styled-components"
import { device } from "../../consts";
import { ImgComponent } from "../Img"

interface RingsProps {
    id: number,
    title: string,
    img: any
}

const RingContainer = styled.div`
    max-width: 310px;
    margin-bottom: 64px;
    border-radius: 20px;
    transition: 0.5s;
    color: ${props => props.theme.raisinBlack};
    &:hover {
        color: ${props => props.theme.white};
        background: ${props => props.theme.linear};
        box-shadow: 12px 18px 30px rgba(0, 0, 0, 0.08);
        cursor: pointer;
        transition: 0.5s;
    }
    @media ${device.tablet} { 
        width: 100%;
        margin: 0;
        &:hover {
        color: ${props => props.theme.raisinBlack};
        background: none;
    }
    } 
`;

const Title = styled.h3`
    margin: 0;
    width: 100%;
    padding: 25px 0 34px 0;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 141.9%;
    text-align: center;
    letter-spacing: 0.02em;
`;

export const RingCart: FC<RingsProps> = ({id, title, img}) => {
    return (
        <RingContainer key={id}>
            <ImgComponent src={img} />
            <Title>
                {title}
            </Title>
        </RingContainer>
    )
}