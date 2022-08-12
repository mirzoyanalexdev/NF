import Slider from "react-slick"
import styled from "styled-components"
import { ExchangeCart } from "../../components/ExchangeCart";
import { ExchangeData } from "../../consts";

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
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

const Wrapper = styled.section`
    width: 100%;
    margin-top: 50px;
    background: ${props => props.theme.cultured};
`;

const SliderContainer = styled.div`
    width: 100%;
    text-align: center;
`;


export const Exchange = () => {
    return (
        <Wrapper>

            <SliderContainer>

                <Slider {...settings}>
                    {
                        ExchangeData.map(({id, img}) => {
                            return <ExchangeCart id={id} img={img} />
                        })
                    }
                </Slider>
            
            </SliderContainer>

        </Wrapper>
    )
}