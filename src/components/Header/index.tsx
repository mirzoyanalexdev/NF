import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { device, HeaderLinks, Images } from '../../consts';
import { PrimaryButton } from '../UI/Button';
import {AiOutlineMenu} from 'react-icons/ai';
import { useState } from 'react';

  
const Header = () => {

    const [show, setShow] = useState<boolean>(false);

    const handlerShow = () => {
        setShow(!show)
    }

  return (
    <Wrapper>
        <MainDiv>
            <RoutesDiv>
                <LogoDiv>
                    <Logo />
                    <LogoText>
                        NFT.Ring
                    </LogoText>
                </LogoDiv>
                <LinkDiv>
                    {
                        HeaderLinks.map((item) => {
                            return (
                                <Link to={item.path} style={{
                                    textDecoration: 'none', margin: '0 36px', color: '#fff', fontWeight: '400', fontSize: "20px" }}>
                                    {item.name}
                                </Link>
                            ) 
                        })
                    }
                </LinkDiv>
            </RoutesDiv>
                <PrimaryButton title={'Login'}/>
        </MainDiv>
        <ResponsiveMainDiv>
            <Burger>
                <AiOutlineMenu onClick={handlerShow} style={{
                    color: 'white', width: '50px', height: '50px',
                }}/>
            </Burger>
            {
                show ? <>
                 <ResponsiveRoutesDiv>
                <ResponsiveLinkDiv>
                    {
                        HeaderLinks.map((item) => {
                            return (
                                <Link to={item.path} style={{
                                    textDecoration: 'none', margin: '10px', color: '#fff', fontWeight: '400', fontSize: "20px" }}>
                                    {item.name}
                                </Link>
                            ) 
                        })
                    }
                </ResponsiveLinkDiv>
            </ResponsiveRoutesDiv>
            <ButtonContainers>
                <PrimaryButton title={'Login'}/>
            </ButtonContainers>
                </> : null
            }
           
        </ResponsiveMainDiv>
    </Wrapper>
  );
};

    const Wrapper = styled.div`
        width: 100%;
        padding: 54px 0;
        @media ${device.laptop} {
            padding: 0;
        }
    `;

    const Burger = styled.div`
        width: 100%;
        display: flex;
        justify-content: start;
    `;

    const ButtonContainers = styled.div`
        width: 50%;
        display: flex;
        justify-content: start;
        margin: 10px;
    `;

    const MainDiv = styled.section`
        width: 100%;
        display: flex;
        max-width: 1300px;
        margin: 0 auto;
        @media ${device.laptop} {
            display: none;
        }
        @media ${device.laptop} {
            max-width: 950px;
        }
    `;

    const ResponsiveMainDiv = styled.section`
        display: none;
        width: 100%;
        max-width: 1300px;
        margin: 0 auto;
        justify-content: space-between;
        background-color: black;
        @media ${device.laptop} {
            display: flex;
            flex-direction: column;
            max-width: 100%;
        }
    `;

    const RoutesDiv = styled.section`
        width: 100%;
        display: flex;
    `;

    const ResponsiveRoutesDiv = styled.section`
        width: 100%;
        display: flex;
        flex-direction: column;
    `;

    const LinkDiv = styled.section`
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-left: 81px;
    `;

    const ResponsiveLinkDiv = styled.section`
        display: flex;
        flex-direction: column;
        align-items: start;
        margin: 10px 0;
    `;

    const LogoDiv = styled.section`
        display: flex;
        align-items: center;
        justify-content: start;
        
    `;

    const Logo = styled.section`
        width: 40px;
        height: 40px;
        margin-right: 17px;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(140.08deg, #9CD2EE 3.42%, #00ACEE 95.98%);
        border-radius: 50%;
    `;

    const LogoText = styled.span`
        color: #fff;
        font-weight: 700;
        font-size: 20px;
    `;

export default Header;
