
import HeaderButton from '../layouts/HeaderButton'
import { header } from '../../profile'
import logo from '../../styles/m.png'
import React, { useState } from "react";
import styled from "styled-components";

const Header = () => {
    const Nav = styled.nav`
    padding: 0 20px;
    min-height: 9vh;
    background: #1C00ff00;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.h1`
  font-size: 25px;
  color: black;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;

  li:nth-child(2) {
    margin: 0px 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li``;

const Link = styled.a`
  color: white;
  text-decoration: none;
  font-size: 20px;
  line-height: 2.6;
font-family: Montserrat, sans-serif;
  :hover {
    text-decoration: underline;
  }
`;

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #fff;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${props => (props.open ? "40%" : "70%")};
  }
`;

const Overlay = styled.div`
  position: absolute;
  height: ${props => (props.open ? "91vh" : 0)};
  width: 100vw;
  background: #1c2022;
  transition: height 0.4s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);

  li {
    opacity: ${props => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`;

    const toggleDarkMode = () =>  {
        document.documentElement.classList.toggle('dark-mode')
        document.getElementById('not-dark').classList.toggle('inverse-dark')
        document.getElementById('not').classList.toggle('inverse-dark')
        var x = document.getElementsByClassName('img-pro')
        for(let i = 0; i < x.length; i += 1) {
        x.item(i).classList.toggle("inverse-dark");
    }
        
        if (document.documentElement.classList.contains('dark-mode'))
        localStorage.setItem('mode', 'Dark')
    else
        localStorage.setItem('mode', 'Light')
    }
    const [toggle, toggleNav] = useState(false);
    return ( <>
        <Nav >
                    <Logo>
                        <img src={logo} alt="Logo" href='/' className='Logo' width='60px' height='60px' />
                    </Logo>
            <Menu>
            <Item>
                <Link target="#" href="https://www.linkedin.com/in/michael-watt-6a76961b3/">
                <i className="fab fa-linkedin"></i>
                </Link>
            </Item>
            <Item>
                <Link target="#" href="https://twitter.com/michaelDaleyOne">
                <i className="fab fa-twitter"></i>
                </Link>
            </Item>
            <Item>
                <Link target="#" href="https://github.com/michaelmw17">
                <i className="fab fa-github"></i>
                </Link>
            </Item>
            </Menu>
            <NavIcon onClick={() => toggleNav(!toggle)}>
            <Line open={toggle} />
            <Line open={toggle} />
            <Line open={toggle} />
            </NavIcon>
        </Nav>
        <Overlay open={toggle}>
            <OverlayMenu open={toggle}>
            <Item>
                <Link target="#" href="https://www.linkedin.com/in/michael-watt-6a76961b3/">
                <i className="fab fa-linkedin"></i>
                </Link>
            </Item>
            <Item>
                <Link target="#" href="https://twitter.com/michaelDaleyOne">
                <i className="fab fa-twitter"></i>
                </Link>
            </Item>
            <Item>
                <Link target="#" href="https://github.com/michaelmw17">
                <i className="fab fa-github"></i>
                </Link>
            </Item>
            </OverlayMenu>
        </Overlay>
    
        <div>
            <div className="Header">
                <h1>{ `I'm ${header.name}` }</h1>
            <p className="line-1 anim-typewriter">this is my  portfolio...&#128515;</p>
            <label className="switch">
                <input id="mode-switch" onClick={toggleDarkMode} type="checkbox"/>
                <span className="slider round"></span>
            </label>
            <HeaderButton/>
            </div>
            </div>
            </>
    )
    }

export default Header;