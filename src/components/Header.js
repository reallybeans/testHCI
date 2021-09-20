import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
function Header() {
const [burgerStatus, setBugerStatus] = useState(false);

    return (
        <Container>
            <a>
                <img src="/images/logo.jpg"></img>
            </a>
            <Menu>
                <a href="#">Home</a>
                <a href="#">Item</a>
                <a href="#">About</a>
            </Menu>
            <RightMenu>
                <CustomMenu onClick={() =>setBugerStatus(true)}></CustomMenu>

                <BurgerNav show={burgerStatus}>
                    <CloseWrapper>
                        <CustomClose onClick={() =>setBugerStatus(false)}/>
                    </CloseWrapper>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Favorites</a></li>
                    <li><a href="#">Item liked</a></li>
                    <li><a href="#">Follow</a></li>
                    <li><a href="#">Logout</a></li>
                </BurgerNav>
            </RightMenu>
        </Container>
    )
}

export default Header

const Container = styled.div`
min-height:60px;
position :fixed;
display:flex;
align-items : center;
padding: 0 20px;
top:0;
left:0;
right:0;
img{
    margin-top:10px;
    width:50px;
}
z-index:1;
`
const Menu = styled.div`
display:flex;
flex: 1;
align-items: center;
justify-content: center;
a {
    color:white;
    font-weight:600;
    text-transform:uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
    margin-left:50px;
}
`
const RightMenu = styled.div`
display:flex;
align-items: center;

a {
    font-weight:600;
    text-transform:uppercase;
    padding: 0 10px;
}
`
const CustomMenu = styled(MenuIcon)`
color:white;
cursor:pointer;
`
const BurgerNav = styled.div`
position:fixed;
top: 0;
bottom: 0;
right: 0;
background-color: white;
width: 300px;
z-index: 16;
list-style: none;
padding: 20px;
display: flex;
flex-direction: column;
text-align: start;
transform: ${props => props.show ? 'translateX(0)':'translateX(100%)'};
transition: transform 0.2s ease-in;
li {
  padding: 15px 0;
  border-bottom: 1px solid  rgba(48, 55, 68, 0.5);
  a
  {
      font-weight: 600;
  }
}
`
const CustomClose = styled(CloseIcon)`
cursor:pointer;
`

const CloseWrapper = styled.div`
display:flex;
justify-content: flex-end;
`