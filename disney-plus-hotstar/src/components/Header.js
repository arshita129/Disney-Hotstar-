import React from 'react'
import styled from 'styled-components';
import { auth, provider } from '../firebase';

function Header() {

    const handleAuth=()=>{
        auth
            .signInWithPopup(provider)
            .then((result)=>{
                console.log(result)
            })
            .catch((error)=>{
                alert(error.message);
            });
    };

    return (
        <Nav>
            <Logo src='images/logo.svg'/>
            <NavMenu>
                <a>
                    <img src="/images/home-icon.svg"/>
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg"/>
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg"/>
                    <span>WACTHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg"/>
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg"/>
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg"/>
                    <span>SERIES</span>
                </a>
            </NavMenu>
            {/* <UserImg src="shinchan.jpg"/> */}
            <LoginButton onClick={handleAuth} >LOGIN</LoginButton>
        </Nav>
    )
}

export default Header

const Nav=styled.nav`
    height: 70px;
    background-color: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
`

const Logo=styled.img`
    width: 80px;
`
const NavMenu=styled.div`
    display: flex;
    flex: 1;
    margin-left: 20px;
    align-items: center;

    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img{
            height: 20px;
        }

        span{
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after{
                content: "";
                height: 2px;
                background-color: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
                transform: scaleX(0);
            }
        }

        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1
            }
        }

    }
`

const LoginButton=styled.button`
    background-color: black;
    color: white;
    border: 1px solid white;
    font-size: 18px;
    padding: 8px 16px;
    letter-spacing: 1.5px;
    transition: all 250ms;
    border-radius: 20px;
    cursor: pointer;

    &:hover{
        background-color: rgba(149,149,149,0.6);
    }
`

// const UserImg=styled.img`
//     width: 48px;
//     height: 48px;
//     border-radius: 50%;
//     cursor: pointer;
// `