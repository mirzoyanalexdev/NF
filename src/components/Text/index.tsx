import { FC } from "react";
import styled from "styled-components";
import { device } from "../../consts";

interface TitleProps {
    text: string
}

const Text = styled.p`
    margin: 0;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 163%;
    letter-spacing: 0.02em;
    max-width: 770px;
    color: ${props => props.theme.raisinBlack};
    @media ${device.tablet} { 
        max-width: 800px;
        text-align: center;
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 20px;
        @media ${device.tablet} {
            margin: 0;
        }
    }
`;


export const TextComponent: FC<TitleProps> = ({text}) => {
    return (
        <Text>
            {text}
        </Text>
    )
}