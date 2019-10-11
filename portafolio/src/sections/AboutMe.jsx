import React from 'react';
import Info from '../components/Info';
import Skills from '../components/Skills';
import '../styles/AboutMe.css';

const AboutMe = () =>{
    return(
        <section className='AboutMe'>
            <div id="AboutMe" className='AboutMe-container'>
                <Info />
                <Skills />
            </div>
        </section>
    )
}
export default AboutMe;