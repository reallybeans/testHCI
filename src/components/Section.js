import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
function Section() {
    return (
        <Wrap>
            <Fade bottom>
                {/* <Title> */}
                <ItemText>
                    <H1>My Suggestion</H1>
                    <P>Building your own PC and need ideas on where to get started? Explore our build guides
                        which cover systems for a variety of use-cases and budgets.</P>
                </ItemText>
            </Fade>
            {/* <div class="container">
                    <input placeholder='Search...' class='js-search' type="text" />
                    <i><FontAwesomeIcon icon={faSearch} /></i>
                </div> */}
            {/* </Title> */}


            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>Login</LeftButton>
                        <RightButton>Join Now</RightButton>
                    </ButtonGroup>
                </Fade>
                <DownArrow src="/images/down-arrow.png">
                </DownArrow>

            </Buttons>
        </Wrap>
    )
}

export default Section
// set style
const Wrap = styled.div`
overflow-x: hidden;
width: 100vw;
height: 100vh;  
background-image: url('/images/bg1.jpg');
background-size: cover;
background-position:center;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
justify-content: space-between; //vertical
align-items: center; //horizontal
`
const Title = styled.div`
width: 100vw;
height: 100vh;  
display: flex;
flex-direction: row;
justify-content: space-between; //vertical
align-items: center; //horizontal
`
const H1 = styled.h1`
margin-top: 10vh;  
font-size: 6em;
color:white;
`
const P = styled.p`
margin-top: 100px;
color:white;
width:700px;
line-height: 50px;
justify-content: center;
align-items: center;
`
const ItemText = styled.div`
margin-top: 16vh; 
text-align: center;
margin-left: 50px;
background-color: rgba(48, 55, 68, 0.8);
border-radius:  10px;
padding:100px;
`
const ButtonGroup = styled.div`
display: flex;
magirn-bottom: 40px;
@media (max-width: 768px) {
    flex-direction: column;
}
`
const LeftButton = styled.div`
background-color: rgba(23, 26, 32, 0.8);
font-weight: bold;
height: 60px;
width: 256px;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
opacity: 0.85;
text-transform: uppercase;
font-size: 12px;
cursor: pointer;
margin: 20px;
&:hover {
    box-shadow: 0px 0px 2px black;
    opacity: 0.9;
}
`
const RightButton = styled(LeftButton)`
background: white;
opacity: 0.65;
color: black;
`
const DownArrow = styled.img`
margin-top: 30px;
height: 35px;
animation: animateDown infinite 1.5s;
`

const Buttons = styled.div``
const SearchBox = styled.div`
margin-top: 105px;
display: flex;
`
const Input = styled.input`
background-color: white;
border: 0;
border-radius: 2px;
border-top-right-radius: 0px;
border-bottom-right-radius: 0px;
font-size: 18px;
padding: 15px;
height: 30px;
width: 300px;
&:focus {
    outline: none;
    box-shadow: 0px 0px 2px red;
}
`
