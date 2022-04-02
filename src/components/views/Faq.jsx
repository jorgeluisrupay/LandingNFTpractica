import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.body};
  position: relative;

`

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-bottom: 1px solid ${(props) => props.theme.text};
  width: fit-content;
`

const Faq = () => {
  return (
    <Section>
      <Title>FAQ</Title>
    </Section>
  )
}

export default Faq

//03:04:02