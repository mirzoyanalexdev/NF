import { FC } from "react";
import styled from "styled-components";
import { device } from "../../consts";

interface TitleProps {
    title: string
}

const Title = styled.h2`
  width: 100%;
  color:  ${props => props.theme.raisinBlack};
  margin: 0 0 24px 0;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 68px;
  letter-spacing: 0.02em;
  @media ${device.mobileL} { 
    max-width: 800px;
    text-align: center;
    font-size: 30px;
    line-height: 45px;
  }
`;


export const TtileComponent: FC<TitleProps> = ({title}) => {
    return (
        <Title>
            {title}
        </Title>
    )
}