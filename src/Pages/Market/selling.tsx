import { FC } from "react"
import styled from "styled-components"
import Header from "../../components/Header"
import { ImgComponent } from "../../components/Img"
import { RegisterButton, SiggleCreateButton } from "../../components/UI/Button"
import { device, Images } from "../../consts"

const Wrapper = styled.section`
    width: 100%;
    background-image: url(${Images.headerBg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    @media ${device.tablet} { 
        height: auto;
    }
`;

const Container = styled.section`
    display: flex;
    align-items: end;
    margin: 0 auto;
    max-width: 1300px;
    justify-content: space-between;
    padding: 143px 0;
    @media ${device.tablet} { 
        max-width: 100%;
        flex-direction: column;
        padding: 0;
        margin: 0;
        align-items: center;
        padding: 20px 0 20px 10px;
    }
    @media ${device.laptop} {
        padding: 30px 50px;
    }
`;

const SellingContainer = styled.div`
    display: flex;
    align-items: start;
    flex-direction: column;
    @media ${device.tablet} {
        width: 100%;
        max-width: 100%;
    }
`;

const Title = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 68px;
    letter-spacing: 0.08em;
    margin: 0 0 30px 0;
    color: ${props => props.theme.white};
    @media ${device.tablet} { 
        font-size: 18px;
        line-height: 20px;
    }
`;

const Text = styled.p`
    margin: 0 0 30px 0;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 157.9%;
    letter-spacing: 0.02em;
    color: ${props => props.theme.white};
    @media ${device.tablet} { 
        font-size: 16px;
        line-height: 20px;
        max-width: 100%;
    }
`;

const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 20px;
`;

const DetailContainer = styled.div`
    display: flex;
    padding: 0 40px;
    flex-direction: column;
    background: ${props => props.theme.linearBlue};
    box-shadow: -46px -61px 36px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    @media ${device.tablet} { 
        max-width: 800px;
        display: none;
    }
`;

const DetailTitle = styled.h3`
    margin: 0;
    padding-top: 20px;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 175.4%;
    letter-spacing: 0.02em;
    color: ${props => props.theme.white};
`;

const Price = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 4px 0 12px 0;
`;

const PriceTitle = styled.h4`
    margin: 0 10px;
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 175.4%;
    letter-spacing: 0.02em;
    color: ${props => props.theme.cultured};
`;

const PriceText = styled.p`
    margin: 0;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 175.4%;
    letter-spacing: 0.02em;
    color: ${props => props.theme.cultured};
`;

const UserContainer = styled.div`
    display: flex;
    justify-content: start; 
    align-items: center;
    padding-bottom: 34px;
`;

const UserTitle = styled.h4`
    margin: 0 10px;
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 175.4%;
    letter-spacing: 0.02em;
    color: ${props => props.theme.cultured};
`;

export const Selling: FC = () => {
    return (
        <Wrapper>
            <Header />
            <Container>
                <SellingContainer>
                        <Title>
                            The Home of <br />
                                Minimalist Buying <br />
                            and Selling
                        </Title>
                        <Text>
                            This NFT website is a website that features <br />
                            buying and selling, news and blogs. <br />
                            Designed with a minimalist and <br />
                            informative concept
                        </Text>
                    <ButtonsContainer>
                        <RegisterButton title={'Explore'}/>
                        <SiggleCreateButton title={'Create'}/>
                    </ButtonsContainer>
                </SellingContainer>
                <DetailContainer>
                   <DetailTitle>
                        Current price
                   </DetailTitle>
                   <Price>
                        <ImgComponent src={Images.priceLogo} />
                        <PriceTitle>
                         1.98
                        </PriceTitle>
                        <PriceText>
                            ($5,822.47)
                        </PriceText>
                   </Price>
                   <UserContainer>
                        <ImgComponent src={Images.userImg} />
                        <UserTitle>
                            Wade Warren
                        </UserTitle>
                   </UserContainer>
                </DetailContainer>
                
            </Container>
        </Wrapper>
    )
}