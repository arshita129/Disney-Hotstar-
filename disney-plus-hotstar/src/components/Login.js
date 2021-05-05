import React from 'react'
import styled from 'styled-components';

function Login() {
    return (
        <Container>
            <Content>
                <ContentLogoOne src="/images/cta-logo-one.svg"/>
                <SignUp>
                    GET ALL THERE!
                </SignUp>
                <Description>
                    Get Premium access to Raya and the Last Dream for a Disney+ Hotstar subscription.
                </Description>
                <ContentLogoTwo src="/images/cta-logo-two.png"/>
            </Content>
        </Container>
    )
}

export default Login

const Container=styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;
    

    &:before{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        content:"";
        background-image: url("/images/login-background.jpg");
        backgroung-position: top;
        background-size: cover;
        bachground-repeat: no-repeat;
        z-index: -1;
        opacity: 0.7;
    }
`

const Content=styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
`
const ContentLogoOne=styled.img`

`

const SignUp=styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 10px;
    margin-bottom: 12px;

    &:hover{
        background-color: #0483ee;
    }
`

const Description=styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`

const ContentLogoTwo=styled.img`

 `