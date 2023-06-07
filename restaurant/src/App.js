import React from 'react';
import { About, Chef, Socials, Gallery, Header, Intro, Laurels, Footer, Menu } from './containers';
import { Navbar } from './components';
import  './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Menu />
      <Chef />
      <Intro />
      <Gallery />
      <Laurels />
      <Socials />
      <Footer />
      
    </div>
  )
}

export default App