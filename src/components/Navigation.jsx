import React from 'react'
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
`
const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`

const MenuItem = styled.li`
  margin: 0 1rem;
  color: ${props => props.theme.text};
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    width: 0%;
    height: 2px;
    background: ${props => props.theme.text};
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }
`

const Navigation = () => {

  const scrollTop = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }

  return (
    <Section id="navigation">
      <NavBar>
        <Logo />
        <Menu>
          <MenuItem onClick={()=> scrollTop('home')} >Home</MenuItem>
          <MenuItem onClick={()=> scrollTop('about')} >About</MenuItem>
          <MenuItem onClick={()=> scrollTop('roadmap')} >RoadMap</MenuItem>
          <MenuItem onClick={()=> scrollTop('showcase')} >Showcase</MenuItem>
          <MenuItem onClick={()=> scrollTop('team')} >Team</MenuItem>
          <MenuItem onClick={()=> scrollTop('faq')} >Faq</MenuItem>
        </Menu>
        <Button text="Connect Wallet" enlace="https://styled-components.com/docs/basics" />
      </NavBar>
    </Section>
  )
}

export default Navigation