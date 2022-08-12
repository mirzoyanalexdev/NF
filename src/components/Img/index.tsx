import { FC } from "react";
import styled from "styled-components";

interface ImgProps {
    src: string
}

const Img = styled.img`
    margin: 0;
`;

export const ImgComponent: FC<ImgProps> = ({src}) => {
    return <Img src={src} />
}