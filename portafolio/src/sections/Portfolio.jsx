import React from 'react';
import Projects from '../components/Projects';
import Prototypes from '../components/Prototypes';
import '../styles/Portfolio.css';

const Portfolio = () =>{
    return(
        <section className='Portfolio'>
            <div id="Portfolio" className='Portfolio-container'>
                <Projects />
                <Prototypes />
            </div>
        </section>
    )
}
export default Portfolio;