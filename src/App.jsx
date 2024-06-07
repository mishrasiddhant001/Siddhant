import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Projects from './components/projects/projects'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import Education from './components/education/education'
import Skills from './components/skills/skills'


const App = () => {
  return (
    <div>
       <Header />
       <Nav />
       <About />
       <Skills/>
       <Education/>
       <Projects />
       <Contact />
       <Footer />
    </div>
  )
}

export default App
