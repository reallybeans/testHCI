import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

function ImgSlider() {

    let settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToRoll: true,
        autoplay: true
    }

    return (
        <Carousel {...settings}>
            <Wrap>
                <img src="/images/slider4.jpg" />
            </Wrap>

            <Wrap>
                <img src="/images/slider3.jpg" />
            </Wrap>
            <Wrap>
                <img src="/images/slider1.jpg" />
            </Wrap>
            <Wrap>
                <img src="/images/slider6.jpg" />
            </Wrap>
        </Carousel>
    )
}

export default ImgSlider

const Carousel = styled(Slider)`
    padding-top: 4%;
    width:100%;
    
    ui li button {
        &:before {
            font-size: 10px; 
            color: black;
        }
    }

    li.stick-active button:before {
        color: black;
    }
    
    .slick-list {
        overflow: visible;
    }

    button { 
        z-index = -1;
    }

`
const Wrap = styled.div`
img{
    margin-left: auto;
    margin-right: auto;
    width: 50%;height:50%;
    border-radius: 5%;
    box-shadow: 4px 4px 5px black;

    &:hover {
        border: 5px solid white;
    }
}
`
