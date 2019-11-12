import React from 'react';
import Projects from '../components/Projects';
import '../styles/Portfolio.css';

const Portfolio = () =>{
    return(
        <section className='Portfolio'>
            <div id="Portfolio" className='Portfolio-container'>
                <Projects />
                
            </div>
        </section>
    )
}
export default Portfolio;