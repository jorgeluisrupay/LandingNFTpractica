import React, {useState} from 'react'
import styled from 'styled-components'
import Button from './Button'
import Logo from './Logo'

const Section = styled.section`
  width: 100%;
  background-color: ${props => props.theme.body};
`
const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 85%;
  height: ${props => props.theme.navHeight};
  margin: 0 auto;

  .mobile{
    display: none;
  }
  @media (max-width: 64em) {
    /* 1024px */
    .desktop{
      display: none;
    }
    .mobile{
    display: inline-block;
  }
  }
`
const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  
  list-style: none;

  @media (max-width: 64em) {
    /* 1024px */
    position: fixed;
    top: ${props => props.theme.navHeight};
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: ${props => `calc(100vh - ${props.theme.navHeight})`};
    z-index: 50;
    background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.85)`};
    backdrop-filter: blur(7px);

    transform: ${props => props.click ? 'translateY(0)' : 'translateY(1000%)'};
    transition: all 0.3s ease;

    flex-direction: column;
    justify-content: center;
  };
`

const MenuItem = styled.li`
  margin: 0 1rem;
  color: ${props => props.theme.text};
  cursor: pointer;

  &::before, &::after{
    content: '';
    display: block;
    width: 0%;
    height: 2px;
    background: ${props => props.theme.text};
    transition: width 0.3s ease;
  }
  &:hover::before, &:hover::after {
    width: 100%;
  }
  /* display: none; */

  @media (max-width: 64em) {
    /* 1024px */
    margin: 1rem 0;
    text-align: center;
    &::before, &::after{
      display: none;
    }
  }

  @media (max-width: 48em) {
    width: 80%;
  }

`

const HamburguerMenu = styled.span`
  width: ${props => props.click ? '2rem' : '1.5rem'};
  height: 2px;
  background-color: ${props => props.theme.text};

  position: absolute;
  top: 2rem;
  left: 50%;
  transform: ${props => props.click? 'translateX(-50%) rotate(90deg)': 'translateX(-50%) rotate(0)'  };

  display: none;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 64em) {
    /* 1024px */
    display: flex;
  };

  &::after, &::before{
    content: ' ';
    width: ${props => props.click ? '1rem' : '1.5rem'};
    height: 2px;
    right: ${props => props.click ? '-2px' : '0'};
    background-color: ${props => props.theme.text};
    position: absolute;
  }
  &::after{
    top: ${props => props.click ? '0.3rem' : '0.5rem'};
    transform: ${props => props.click ? 'rotate(-40deg)' : 'rotate(0)'};
  }
  &::before{
    bottom: ${props => props.click ? '0.3rem' : '0.5rem'};
    transform: ${props => props.click ? 'rotate(40deg)' : 'rotate(0)'};
  }
`

const Navigation = () => {

  const [click, setclick] = useState(false);


  const scrollTop = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })

    setclick(!click);
  }

  return (
    <Section id="navigation">
      <NavBar>
        <Logo />
        <HamburguerMenu click={click} onClick={()=> setclick(!click) } >
          &nbsp;
        </HamburguerMenu>
        <Menu click={click}>
          <MenuItem onClick={()=> scrollTop('home')} >Home</MenuItem>
          <MenuItem onClick={()=> scrollTop('about')} >About</MenuItem>
          <MenuItem onClick={()=> scrollTop('roadmap')} >RoadMap</MenuItem>
          <MenuItem onClick={()=> scrollTop('showcase')} >Showcase</MenuItem>
          <MenuItem onClick={()=> scrollTop('team')} >Team</MenuItem>
          <MenuItem onClick={()=> scrollTop('faq')} >Faq</MenuItem>
          <MenuItem>
            <div className="mobile">
            <Button text="Connect Wallet" enlace="https://styled-components.com/docs/basics" />
            </div>
          </MenuItem>
        </Menu>
        <div className="desktop">
          <Button text="Connect Wallet" enlace="https://styled-components.com/docs/basics" />
        </div>
      </NavBar>
    </Section>
  )
}

export default Navigation