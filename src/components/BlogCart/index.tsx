import { FC } from "react"
import styled from "styled-components"
import { device } from "../../consts"
import { ImgComponent } from "../Img"

interface BlogCartProps {
    id: number
    title: string
    img: string
}

const BlogContainer = styled.div`
    width: 100%;
    margin: 28px 11px 80px 11px;
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    @media ${device.laptop} {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin: 0;
    }
`;

const Title = styled.div`
    color: ${props => props.theme.raisinBlack};
    background: ${props => props.theme.cultured};
    max-width: 50%;
    max-height: 108px;
    display: flex;
    align-items: center;
    position: absolute;
    padding: 37px 55px;
    bottom: 0;
    left: 41px;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 141.9%;
    letter-spacing: 0.02em;
    @media ${device.tablet} {
        display: block;
        width: 100%;
        margin: 0;
    }
    @media ${device.laptop} {
        display: none;
    }
`;

export const BlogCart: FC<BlogCartProps> = ({id, title, img}) => {
    return (
        <BlogContainer key={id}>
           <ImgComponent src={img} />
           <Title>
            {title}
           </Title>
        </BlogContainer>
    )
}