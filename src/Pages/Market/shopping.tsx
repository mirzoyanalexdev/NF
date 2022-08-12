import styled from "styled-components"
import { RingCart } from "../../components/RingCart"
import { TextComponent } from "../../components/Text"
import { TtileComponent } from "../../components/Title"
import { device, RingsData } from "../../consts"

const Wrapper = styled.section`
    width: 100%;
    background: ${props => props.theme.mostlyWhite};
`;

const ShoppingContainer = styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1440px;
`;

const ShoppingDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 77px auto;
    max-width: 770px;
    text-align: center;
    @media ${device.tablet} { 
        width: 80%;
        margin: 35px auto;
    }
`;


const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    @media ${device.tablet} { 
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
    }
`;

export const Shopping = () => {

    return (
        <Wrapper>

            <ShoppingContainer>

                <ShoppingDiv>
                    <TtileComponent title={`New Generation of Online Shopping`} />
                    <TextComponent text={`This NFT website is a website that features buying and selling, news and  blogs. Designed with a minimalist and informative concept`} />
                </ShoppingDiv>

                <Container>
                    {
                        RingsData.map(({id, title, img}) => {
                            return <RingCart id={id} title={title} img={img} />
                        })
                    }
                </Container>

            </ShoppingContainer>

        </Wrapper>
    )
}