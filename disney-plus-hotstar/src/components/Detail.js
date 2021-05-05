import React from 'react'
import styled from 'styled-components';

function Detail() {
    return (
        <Container>
            <Background>
                <img src="/images/details-background.jfif"/>
            </Background>
            <ImageTitle>
                <img src="/images/detail-logo.png"/>
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png"/>
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png"/>
                    <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png"/>
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                2018 . 7m . Family, Fantasy, Kids, Animation
            </SubTitle>
            <Description>
                A chinese mom who's sad when her grown son leaves home, 
                gets another chance at motherhood.
                A chinese mom who's sad when her grown son leaves home, 
                gets another chance at motherhood.
                A chinese mom who's sad when her grown son leaves home, 
                gets another chance at motherhood.
            </Description>
        </Container>
    )
}

export default Detail

const Container=styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`
const Background=styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottome: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle=styled.div`
    padding-top: 50px;
    min-height: 170px;
    min-width: 200px;
    height: 35vh;
    width: 25vw;

    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls=styled.div`
    display: flex;
    height: 50px;
    margin-top: 50px;
`

const PlayButton=styled.button`
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    align-items: center;
    background: rgb(254,249,249);
    border: none;
    padding: 24px;
    margin-right: 22px;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover{
        background-color: rgba(198,198,198);
    }
`

const TrailerButton=styled(PlayButton)`
    background: rgba(0,0,0,0.3);
    border: 1px solid rgb(259,259,259);
    color: rgb(259,259,259);
    text-transform: uppercase;
`

const AddButton=styled.button`
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: rgba(0,0,0,0.3);
    border: 1px solid rgb(259,259,259);
    color: rgb(259,259,259);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 24px;
    margin-right: 22px;
    span{
        font-size: 30px;
        color: white;
    }
    &:hover{

    }
`

const GroupWatchButton=styled(AddButton)`
    background: rgb(0,0,0);
`

const SubTitle=styled.div`
    font-size: 15px;
    min-height: 20px;
    margin-top: 30px;
    font-weight: bold;
    color: rgb(249,249,249);
`

const Description=styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
`