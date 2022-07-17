import React from 'react'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Header from './components/header/Header.jsx'
import Nav from './components/nav/Nav'


const App = () => {
  return (
    
    <>
        <Header />
        <Nav />
        <About/>
        <Experience/>
        <Contact/>
        <Footer/>

    
    </>

  )
}

export default App
