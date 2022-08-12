import { FC } from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import { Blog } from "./blog";
import { Category } from "./category";
import { Excluzive } from "./exclusive";
import { Exchange } from "./exchange";
import { Selling } from "./selling";
import { Shopping } from "./shopping";
import { Newsletter } from "./newsletter";

const Wrapper = styled.div`
    width: 100%;
`;

export const Market: FC = () => {
    
    return (
        <Wrapper>
            <Selling />
                <Shopping />
                <Excluzive />
                <Blog />
                <Category />
                <Exchange />
                <Newsletter />
            <Footer />
        </Wrapper>
    )
}