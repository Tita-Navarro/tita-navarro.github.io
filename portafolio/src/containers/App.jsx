import React from 'react';
import Main from '../components/Main';
import Navbar from '../components/Navbar';
import AboutMe from '../components/AboutMe';
import Hobbies from '../components/Hobbies';
import Portfolio from '../components/Portfolio';
import ContactMe from '../components/ContactMe';

const App=()=>{
  return(
    <Main>
      <Navbar />
      <AboutMe />
      <Hobbies />
      <Portfolio />
      <ContactMe />
    </Main>
  )
};
export default App;