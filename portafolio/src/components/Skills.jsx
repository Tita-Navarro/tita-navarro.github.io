import React from 'react';
import '../styles/Skills.css';

const Skills =()=>{
    return(
        <div className='Skills'>
        <section className='Skills-container container-fluid'>
            <h2 className='skill-title'>Skills</h2>
            <div className='row separation2'>
                <div className='col-sm'>
                    <ul>
                        <li className='soft-skill'>Self-Learning</li>
                        <li className='soft-skill'>TeamWork</li>
                        <li className='soft-skill'>Honest</li>
                        <li className='soft-skill'>Responsability</li>
                        <li className='soft-skill'>Dynamic</li>
                        <li className='soft-skill'>Empathy</li>
                        <li className='soft-skill'>Leadership</li>
                    </ul>
                </div>
                <div className='col-sm'>
                <i className="devicon-html5-plain-wordmark colored tech-skill"/>
                <i className="devicon-css3-plain-wordmark colored tech-skill"/>
                <i className="devicon-javascript-plain colored tech-skill"/>
                <i className="devicon-git-plain-wordmark colored tech-skill"/>
                <i className="devicon-github-plain-wordmark tech-skill"/>
                <i className="devicon-visualstudio-plain colored tech-skill"/><br/>
                <span className='tech-name'>HTML</span>
                <span className='tech-name name-mov'>CSS3</span>
                <span className='tech-name name-mov'>Javascript</span>
                <span className='tech-name name-mov'>Git</span>
                <span className='tech-name name-mov'>GitHub</span>
                <span className='tech-name name-mov'>VisualStudio</span> <br/><br/>
                <i className="devicon-bootstrap-plain-wordmark colored tech-skill"/>
                <i className="devicon-nodejs-plain colored tech-skill"/>
                <i className="devicon-react-original-wordmark colored tech-skill"/>
                <i className="devicon-atom-original colored tech-skill"/>
                <i className="devicon-intellij-plain tech-skill"/>
                <i className="devicon-mongodb-plain colored tech-skill"/><br/>
                <span className='tech-name'>Bootstrap</span>
                <span className='tech-name name-mov2'>Node</span>
                <span className='tech-name name-mov'>ReactJs</span>
                <span className='tech-name name-mov'>Atom</span>
                <span className='tech-name name-mov'>IntelliJ</span>
                <span className='tech-name name-mov2'>MongoDB</span>
                </div>
            </div>
        </section>
        </div>
    )
};

export default Skills;