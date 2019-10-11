import React from 'react';
import '../styles/Info.css';

const Info =()=>{
    return(
        <div className='Info container-fluid'>
            <br/><br/><br/>
        <section className='Info-container container-fluid'>
            <div className='row'>
                <div className='col-sm'>
                    <img src={require('../images/tita_color.png')}
                    alt='Tita-Navarro' className='mx-auto img-fluid resp-photo'/>
                </div>
                <div className='col-sm br-div'>
                    <h5 className='presentation h5size'>Hello, my name 
                    is</h5>
                    <h1 className='presentation h1size'>Martha Navarro</h1>
                    <h3 className='presentation h3size'>I love to learn
                    and build experiences on web.</h3>
                    <h4 className='presentation h4size'>I'm a FrontEnd
                    Developer with a background in Digital Marketing
                    based in Guadalajara, MX. <br/> I worked with HTML5,
                    CSS3, Javascript, Bootstrap and React. <br/>
                    Let's keep in touch. You could send an e-mail:
                        tita1089@gmail.com<br/> I'll answer as soon as 
                        possible. </h4>
                </div>
            </div>
        </section>
        </div>
    )
};

export default Info;