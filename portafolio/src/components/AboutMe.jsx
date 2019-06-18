import React from 'react';
import '../styles/AboutMe.css';
import '../styles/style.css';

const AboutMe =()=>{
    return(
        <div className='About'>
            <div className='About-container div-bg'>
                <div className='About-brand'>
                    <br/> <br/> <br/>
                    <img src={require('../images/Castelnav.png')} alt='brand' className='mx-auto d-block img-fluid'/>
                </div>
                <br/> <br/>
                <div className="container AboutMe">
                    <div className="row">
                        <div className="col-md">
                            <img src={require('../images/tita_color.png')} alt='tita' className='mx-auto img-fluid' />
                        </div>
                        <div className="col-md">
                           <br/> <br/>
                           <h3 className='About-info'>Martha M. Navarro</h3>
                           <h3 className='About-info'>Alias: Tita</h3>
                           <h3 className='About-info'>FrontEnd UX Marketer</h3>
                        </div>
                        <div className="col-md">
                            One of three columns
                        </div>
                    </div>
                    <br/>
                    <div className='About-Skills container'>
                        <div className='row'>
                            <div className='col'>
                                <h2 className='About-info'>Soft Skills</h2>
                                <h5 className='About-info'>Teamwork</h5>
                                <h5 className='About-info'>Responsability</h5>
                                <h5 className='About-info'>Self-learning</h5>
                                <h5 className='About-info'>Honesty</h5>
                                <h5 className='About-info'>Empathy</h5>
                                <h5 className='About-info'>Leadership</h5>
                                <h5 className='About-info'>Dynamism</h5>
                            </div>
                            <div className='col'>
                                <h2 className='About-info'>Technique Skills</h2>
                                <h5 className='About-info'>Javascript</h5>
                                <h5 className='About-info'><span className='icon-html5'></span>HTML5 & <span className='icon-css31'></span>CSS3</h5>
                                <h5 className='About-info'><span className='icon-bootstrap'></span>Bootstrap & <span className='icon-react'></span>React</h5>
                                <h5 className='About-info'>Photoshop & <span className='icon-figma'></span>Figma</h5>
                                <h5 className='About-info'><span className='icon-react'></span>React-Native & Firebase</h5>
                                <h5 className='About-info'><span className='icon-node-dot-js'></span>Node.js & <span className='icon-git1'></span>Git & <span className='icon-github1'></span>GitHub</h5>
                                <h5 className='About-info'>Agile Methods (Kanban)</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;