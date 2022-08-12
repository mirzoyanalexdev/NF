import styled from "styled-components"
import { ExcluziveCart } from "../../components/ExcluziveCart"
import { TextComponent } from "../../components/Text"
import { TtileComponent } from "../../components/Title"
import { device, ExcluziveData } from "../../consts"

const Wrapper = styled.section`
    width: 100%;
`;

const Container = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    margin: 77px auto;
    align-items: center;
    max-width: 1440px;
    @media ${device.tablet} {
        width: 80%;
        margin: 40px auto 20px auto;
    }
`;

const CartContainer = styled.div`
    margin: 77px auto;
    max-width: 1440px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    @media ${device.tablet} { 
        margin: 0 auto;
        gap: 10px;
    }
`;

export const Excluzive = () => {
    return (
        <Wrapper>
            <Container>
                <TtileComponent title={'Exclusive NFT.Ring drops'}/>
                <TextComponent text={'This NFT website is a website that features buying and selling, news and blogs. Designed with a minimalist and informative concept'}/>
            </Container>
            <CartContainer>
                {
                    ExcluziveData.map(({id, title, price, imgUser, img, name, priceLogo}) => {
                        return <ExcluziveCart id={id} price={price} title={title} imgUser={imgUser} img={img} name={name} priceLogo={priceLogo} />
                    })
                }
            </CartContainer>
        </Wrapper>
    )
}