import styled from "styled-components"
import { TextComponent } from "../../components/Text"
import { TtileComponent } from "../../components/Title"
import { RegisterButton } from "../../components/UI/Button"
import { device, Images } from "../../consts"

const Wrapper = styled.section`
    width: 100%;
    background-image: url(${Images.newsletter});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const Container = styled.div`
    display: flex;
    align-items: start;
    margin: 0 auto;
    flex-direction: column;
    padding: 232px 0;
    max-width: 1400px;
    @media ${device.tablet} { 
        padding: 100px 0;
        display: flex;
        align-items: center;
    }
`;

const RegisterContainer = styled.div`
    position: relative;
    margin-top: 48px;
`;

const Input = styled.input`
    color: ${props => props.theme.raisinBlack};
    border-radius: 10px;
    border: none;
    padding: 14px 268px 14px 34px;
    &::-webkit-input-placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 175.4%;
        letter-spacing: 0.02em;
        color: #333333;
    }
    @media ${device.tablet} { 
        padding: 11px 150px 11px 34px;
    }
`;

const ButtonContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
`;


export const Newsletter = () => {
    return (
        <Wrapper>
            <Container>
                <TtileComponent title={'Stay in the loop'} />
                <TextComponent text={' Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFT.Ring'} />
                <RegisterContainer>
                    <Input placeholder="Your Email Address" type={'text'}/>
                    <ButtonContainer>
                        <RegisterButton title={"Register"} />
                    </ButtonContainer>
                </RegisterContainer>
            </Container>
            
        </Wrapper>
    )
}