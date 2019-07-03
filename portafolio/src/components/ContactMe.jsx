import React from 'react';
import '../styles/ContactMe.css';

const ContactMe =()=>{
    return(
        <div id='ContactMe' className='ContactMe'>
            <div className='ContactMe-container'>
                <br/><br/>
                <div className="container ContactMe-info">
                    <div className="row img-marg">
                        <div className="col-md">
                            <img src={require('../images/contactme_mickey.png')} alt='contact-reference' 
                            className='mx-auto rounded float-left img-fluid' />
                        </div>

                        <div className="col-md">
                           <br/> <br/>
                           <h3 className='ContactMe-title'>If I am the right DevUx. We can continue talking.</h3>
                           <h3 className='ContactMe-title'>You can contact me at:</h3>
                           <br/>
                           <a href='https://www.linkedin.com/in/titanavarro/' target='_blank'>
                           <img src="https://img.icons8.com/color/96/000000/linkedin.png" alt='contact-linkedin'
                           className='display-icon'/>
                           </a>
                           <a href='https://www.github.com/Tita-Navarro' target='_blank'>
                           <img src="https://img.icons8.com/bubbles/96/000000/github.png" alt='contact-github'
                           className='display-icon'/>
                           </a>
                           <a href='https://api.whatsapp.com/send?phone=523921107898&text=Hola%20Tita,
                           %20me%20daría%20un%20placer%20ponerme%20en%20contacto%20contigo.%20
                           Escribe%20al%20siguiente%20correo' target='_blank' rel='noopener'>
                           <img src="https://img.icons8.com/office/80/000000/whatsapp.png" alt='contact-whatsapp'
                           className='display-icon'/>
                           </a>
                           <a href='https://www.twitter.com/tita_navarro' target='_blank'>
                           <img src="https://img.icons8.com/color/96/000000/twitter.png" alt='contact-twitter'
                           className='display-icon'/>
                           </a>
                           <a href='https://join.slack.com/t/tita-navarro/shared_invite/enQtNjgyOTM5MzMzNDEzL
                           WM2YTZiMWMxNWJjZTVlODFjZjBlZDBhNzQxZmQ1MTZmZjE2MTJlMzUzZmQxOTVmZGI4NGRlZWEyYzA0NjlkNDI' target='_blank'>
                           <img src="https://img.icons8.com/color/96/000000/slack.png" alt='contact-slack'
                           className='display-icon'/>
                           </a>
                        </div>
                    </div>
            </div>
        </div>
        </div>
    );
}

export default ContactMe;