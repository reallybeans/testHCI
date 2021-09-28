import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Sponsor from './Sponsor'

function Slider() {
    return (
        <Container>
            <ImgSlider />
            <Sponsor />
        </Container>
    )
}

export default Slider

const Container = styled.main`
    height: 100vh;
    padding: 0 calc(3.5vw + 5px); 
    position: relative;

    &:before { 
        background: url("/images/bg2.jpg") center center /
        cover no-repeat fixed;
        content: "";
        position: absolute;
        filter: blur(3px);
        -webkit-filter: blur(3px);
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`
