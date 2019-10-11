import React from 'react';
import '../containers/App.css';
import AboutMe from '../sections/AboutMe';
import Portfolio from '../sections/Portfolio';
import ContactMe from '../sections/ContactMe';
import Navbar from '../components/Navbar';
import Main from './Main';

const App = () =>{
  return(
    <Main>
      <Navbar/>
      <AboutMe/>
      <Portfolio />
      <ContactMe />
    </Main>
  )
}

export default App;
