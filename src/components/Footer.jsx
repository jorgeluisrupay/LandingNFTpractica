import React from 'react'
import styled from 'styled-components'
import Facebook from '../Icons/Facebook'
import Instagram from '../Icons/Instagram'
import LinkedIn from '../Icons/LinkedIn'
import Twitter from '../Icons/Twitter'
import Banner from './Banner'
import Logo from './Logo'

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.body};
  position: relative;
  color: ${(props) => props.theme.text};

  display: flex;
  /* justify-content: center;
  align-items: center; */
  flex-direction: column;

`

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.text};
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const IconList = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;

  &>*{
    padding-right: 0.5rem;
    transition: all 0.2s ease;
    
    &:hover{
      transform: scale(1.2);
    }
  }
`

const MenuItems = styled.ul`
  list-style: none;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;
`

const Item = styled.li`
  width: fit-content;
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
const Bottom = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a{
    text-decoration: none;
  }
`

const Footer = () => {

  const scrollTop = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }

  return (
    <Section>
      <Banner />
      <Container>
        <Left>
          <Logo />
          <IconList>
            <a href="http://www.facebook.com" target="_blank"  rel="noopener">
              <Facebook />
            </a>
            <a href="http://www.instagram.com" target="_blank"  rel="noopener">
              <Instagram />
            </a>
            <a href="http://www.linkedin.com" target="_blank"  rel="noopener">
              <LinkedIn />
            </a>
            <a href="http://www.twitter.com" target="_blank"  rel="noopener">
              <Twitter />
            </a>
          </IconList>
        </Left>
        <MenuItems>
          <Item onClick={()=> scrollTop('home')} >Home</Item>
          <Item onClick={()=> scrollTop('about')} >About</Item>
          <Item onClick={()=> scrollTop('roadmap')} >RoadMap</Item>
          <Item onClick={()=> scrollTop('showcase')} >Showcase</Item>
          <Item onClick={()=> scrollTop('team')} >Team</Item>
          <Item onClick={()=> scrollTop('faq')} >Faq</Item>
        </MenuItems>
      </Container>
      <Bottom>
        <span>
          &copy; {new Date().getFullYear()} Weirdos Club, All righst reserved.
        </span>
        <span>
          Made with &#10084; by <a href="https://youtu.be/edr2o59Twrs" target="_blank"  rel="noopener">
            Weirdos Club
          </a>
        </span>
      </Bottom>
    </Section>
  )
}

export default Footer