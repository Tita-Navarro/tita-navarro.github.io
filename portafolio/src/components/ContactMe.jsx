import React from 'react';
import '../styles/ContactMe.css';

const ContactMe =()=>{
    return(
        <div id='ContactMe' className='ContactMe'>
            <div className='ContactMe-container'>
                <div className='ContactMe-titlediv'>
                    <br/> <br/>
                    <h1 className='ContactMe-title'>Let's Talk</h1>
                </div>
                <div className="container ContactMe-info">
                    <div className="row img-marg">
                        <div className="col-md">
                            <img src={require('../images/contactme_mickey.png')} alt='contact-reference' className='mx-auto rounded float-left img-fluid' />
                        </div>
                        <div className="col-md">
                           <br/> <br/>
                           Vídeo
                        </div>
                    </div>
            </div>
        </div>
        </div>
    );
}

export default ContactMe;