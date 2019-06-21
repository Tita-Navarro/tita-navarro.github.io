import React from 'react';
import '../styles/AboutMe.css';
import '../styles/style.css';
import ReactPlayer from 'react-player';

const AboutMe =()=>{
    return(
        <div id='AboutMe' className='About'>
            <div className='About-container div-bg'>
                <div className='About-brand'>
                    <br/> <br/> <br/>
                    <img src={require('../images/Castelnav.png')} alt='brand' className='mx-auto d-block img-fluid'/><br/>
                    <h2 className='About-info title'>- FrontEnd UX Marketer -</h2>
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
                        </div>
                        <div className="col-md">

                            <ReactPlayer
                            url='https://www.youtube.com/watch?v=WjcylW50-q4'
                            className='react-player'
                            playing
                            
                            width='25rem'
                          />
                        </div>
                    </div>
                    <br/>
                    <div className='About-Skills container'>
                        <div className='row'>
                            <div className='col About-container-icon'>
                                <h2 className='About-info'>Soft Skills</h2>
                                <h5 className='About-info'>Teamwork</h5>
                                <h5 className='About-info'>Responsability</h5>
                                <h5 className='About-info'>Self-learning</h5>
                                <h5 className='About-info'>Honesty</h5>
                                <h5 className='About-info'>Empathy</h5>
                                <h5 className='About-info'>Leadership</h5>
                                <h5 className='About-info'>Dynamism</h5>
                            </div>
                            <div className='col About-container-icon'>
                                <h2 className='About-info tech'>Technical Skills</h2>
                                <span className='devicon-javascript-plain colored About-iconskill'></span>
                                <span className='icon-html5 About-iconskill'></span> 
                                <span className='icon-css31 About-iconskill'></span>
                                <span className='icon-bootstrap About-iconskill'></span> 
                                <span className='devicon-react-original-wordmark colored About-iconskill'></span>
                                <span className='devicon-photoshop-line colored About-iconskill'></span> <br/> <br/> <br/> <br/>
                               <span className='icon-figma About-iconskill icon-move'></span>
                                <span className='icon-react About-iconskill'></span>
                                <span className='devicon-nodejs-plain colored About-iconskill'></span> 
                                <span className='icon-git1 About-iconskill'></span> 
                                <span className='icon-github1 About-iconskill icon-color'></span>
                                <span className='devicon-trello-plain colored About-iconskill'></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;