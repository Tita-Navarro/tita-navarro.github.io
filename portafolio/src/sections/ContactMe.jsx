import React from 'react';
import ContactForm from '../components/ContactForm';
import '../styles/ContactMe.css';

const ContactMe = () =>{
    return(
        <section className='ContactMe'>
            <div id="ContactMe" className='ContactMe-container'>
                <ContactForm />
            </div>
        </section>
    )
}
export default ContactMe;