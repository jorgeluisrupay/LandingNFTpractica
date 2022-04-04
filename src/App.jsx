import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import { dark, light } from './styles/Themes'
import Navigation from './components/Navigation'
import Home from './components/views/Home'
import About from './components/views/About'
import Roadmap from './components/views/Roadmap'
import Showcase from './components/views/Showcase'
import Team from './components/views/Team'
import Faq from './components/views/Faq'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export const App = () => {
  return (
    <>
      <GlobalStyles />
        <ThemeProvider theme={light}>
          <Navigation />
          <Home />
          <About />
          <Roadmap />
          <Showcase />
          <Team />
          <Faq />
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
    </>
  )
}

//4:01:42