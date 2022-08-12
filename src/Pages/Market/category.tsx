import styled from "styled-components"
import { Cart } from "../../components/CategoryCart"
import { TextComponent } from "../../components/Text"
import { TtileComponent } from "../../components/Title"
import { CategoryData, device } from "../../consts"

const Wrapper = styled.section`
    width: 100%;
`;

const Container = styled.section`
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    max-width: 1440px;
    padding-bottom: 28px;
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    max-width: 1440px;
    @media ${device.tablet} {
        display: block;
        width: 100%;
        margin: 30px 0 0 0;
    }
`;


const CartContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    gap: 10px;
`;

export const Category = () => {
    return (
        <Wrapper>
            <Container>
                <Description>
                    <TtileComponent
                      title={'Browse by category'} />
                    <TextComponent
                      text={'This NFT website is a website that features buying and selling, news and blogs. Designed with a minimalist and informative concept'} />
                </Description>
            </Container>
            <CartContainer>
                {
                    CategoryData.map(({id, img}) => {
                        return <Cart id={id} img={img} />
                    })
                }
            </CartContainer>
        </Wrapper>
    )
}