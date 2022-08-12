import { Link } from "react-router-dom"
import styled from "styled-components"
import { device, Marketplace, MyAccount } from "../../consts"

const Wrapper = styled.section`
  width: 100%;
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: 370px auto auto auto;
    margin: 153px auto;
    justify-content: space-between;
    max-width: 1440px;
    @media ${device.tablet} {
      display: flex;
      flex-direction: column;
      text-align: center;
      margin: 50px auto 20px 0;
    }
`;

const Block = styled.div`
    grid-row: 1 / 3;
    @media ${device.tablet} {
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
    }
`;

const Title = styled.h4`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 175.4%;
  letter-spacing: 0.02em;
  margin: 0;
  color: ${props => props.theme.raisinBlack};
`;

const Text = styled.p`
  display: flex;
  flex-direction: column;
  align-items: start;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 189.8%;
  letter-spacing: 0.02em;
  & > a {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 50px;
    letter-spacing: 0.02em;
    color: ${props => props.theme.raisinBlack};
    text-decoration: none;
  }
  @media ${device.tablet} {
    align-items: center;
  }
`;

const Logo = styled.section`
        width: 40px;
        height: 40px;
        margin-right: 17px;
        border-radius: 50%;
        background: ${props => props.theme.linearBlue};
`;

const Footer = () => {
    return (
      <Wrapper>
        <Container>
            <Block>
                <Title>
                    <Logo />
                    Title
                </Title>
                <Text>
                The world’s first and largest digital
                 marketplace for crypto collectibles
                  and non-fungible tokens (NFTs). Buy,
                   sell, and discover exclusive digital assets.
                </Text>
            </Block>
            <Block>
                <Title>
                  Marketplace
                </Title>
                <Text>
                  {
                    Marketplace.map((item) => {
                      return (
                        <Link to={item.path}>
                            {item.title}
                        </Link>
                    ) 
                    })
                  }
                </Text>
            </Block>
            <Block>
                <Title>
                  My Account
                </Title>
                <Text>
                  {
                    MyAccount.map((item) => {
                      return (
                        <Link to={item.path}>
                            {item.title}
                        </Link>
                    ) 
                    })
                  }
                </Text>
            </Block>
            <Block>
                <Title>
                  My Account
                </Title>
                <Text>
                  {
                    MyAccount.map((item) => {
                      return (
                        <Link to={item.path}>
                            {item.title}
                        </Link>
                    ) 
                    })
                  }
                </Text>
            </Block>
        </Container>
      </Wrapper>  
    )
}

export default Footer;