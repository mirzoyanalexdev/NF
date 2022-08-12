import { FC } from "react"
import styled from "styled-components"
import { ImgComponent } from "../Img"

interface CartProps {
    id: number,
    img: string
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 10px;
    box-shadow: 12px 18px 30px rgba(0, 0, 0, 0.1);
    margin-bottom: 24px;
    border-radius: 20px;
    transition: 0.2s;
`;


export const Cart: FC<CartProps> = ({id, img}) => {
    return (
        <Container key={id}>
            <ImgComponent src={img}/>
        </Container>
    )
}