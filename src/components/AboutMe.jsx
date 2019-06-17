import React from 'react';
import '../styles/AboutMe.css';

const AboutMe =()=>(
    <div className='AboutMe'>
        <div className='AboutMe-container'>
            <div className='AboutMe-info'>
                <h4>Name: Martha Navarro</h4>
                <h4>Alias: Tita</h4>
            </div>
            <div className='AboutMe-video'>
                <video src='/'></video>
            </div>
            <div className='AboutMe-TechSkills'>
                <h3>Technical Skills</h3>
            </div>
            <div className='AboutMe-SoftSkills'>
                <h3>Soft Skills</h3>
            </div>
        </div>
    </div>
)

export default AboutMe;