import React from 'react'
import styled from 'styled-components'

function Sponsor() {
    return (
        <Container>
            <Wrap>
                <img src="/images/sponsor1.png" />
            </Wrap>
            <Wrap>
                <img src="/images/sponsor2.png" />
            </Wrap>
            <Wrap>
                <img src="/images/sponsor3.png" />
            </Wrap>
        </Container>
    )
}

export default Sponsor


const Container = styled.div`
margin-top: 80px;
display: flex;
align-items: center;
justify-content: space-around;

`
const Wrap = styled.div`
img{
    width:300px;
}
`