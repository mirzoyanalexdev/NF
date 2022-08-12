import Slider from "react-slick"
import styled from "styled-components"
import { BlogCart } from "../../components/BlogCart"
import { BlogButton } from "../../components/UI/Button"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BlogsData, device } from "../../consts";
import { TtileComponent } from "../../components/Title";
import { TextComponent } from "../../components/Text";

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
};

const SS = styled.div`
    width: 50%;
    display: flex;
    justify-content: end;
    align-items: end;
    @media ${device.laptop} {
      display: flex;
      justify-content: center;
      align-items: center;
    }
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    margin: 20px 0 20px 0;
    max-width: 1300px;
    @media ${device.tablet} {
      display: flex;
      flex-direction: column;
      margin: 20px 0;
    }
    @media ${device.laptop} {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: 20px 0;
      text-align: center;
    }
`;

const Description = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    flex-direction: column;
    padding-left: 80px;
    @media ${device.tablet} {
      padding: 25px 0;
      max-width: 550px;
    }
    @media ${device.laptop} {
      padding: 25px 0;
    }
`;

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media ${device.tablet} {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
`;

const SliderContainer = styled.div`
  width: 100%;
`;

export const Blog = () => {
    return (
        <Wrapper>
            <Container>
                <Description>
                  <TtileComponent title={'Now With More News and Blogs'} />
                  <TextComponent 
                  text={'This NFT website is a website that features buying and selling, news and blogs. Designed with a minimalist and informative concept'} />
                </Description>
                <SS>
                    <BlogButton title={'See All'} />
                </SS>
            </Container>
                    <SliderContainer>
                        <Slider {...settings}>
                            { 
                                BlogsData.map(({id, title, img}) => {
                                    return <BlogCart id={id} title={title} img={img} />
                                })
                            }
                        </Slider>
                    </SliderContainer>
        </Wrapper>
    )
}