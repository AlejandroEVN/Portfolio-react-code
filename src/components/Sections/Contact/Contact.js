import React, { useState, useEffect } from 'react';
import Alert from './Alert';
import ContactSVG from './ContactSVG';
import './contact.css';

const Contact = () => {
    const [showAlert, setShowAlert] = useState(false);
    
    const sendEmail = (e) => {

        e.preventDefault();

        window.emailjs.sendForm('gmail', 'port_web', e.target)
            .then(result => {
                setShowAlert(true);
            }, error => {         
                setShowAlert(true);     
            });

    }

    useEffect( () => {        
        const form = document.querySelector('.form__contact');
        form.reset();
        
        setTimeout(() => {
            document.querySelector('.form__contact').className = "form__contact";
            setShowAlert(false);
        }, 2500)
    }, [showAlert])

    return (
        <>
        <div className="split text-justify">
            <p>I am looking for opportunities to build up a career as a web developer and I would love to hear from you.<br />
                If you want to get in touch, talk about an offer or just say hi, contact me through the form below or directly to my <a href="mailto:vasconalex17@gmail.com" className="text-accent">email</a>.
            </p>
            <form className="form__contact" onSubmit={sendEmail} >
                <input type="hidden" name="contact_number" />
                <div className="container--grid">
                    <div className="form__group">
                        <input className="form__group__input" 
                            placeholder="Name" type="text" 
                            name="user_name" required />
                    </div>
                    <div className="form__group">
                        <input className="form__group__input"  
                            placeholder="Email"  type="email"   
                            name="user_email" required />
                    </div>
                </div>
                <div className="form__group">
                    <textarea className="form__group__input"  
                        placeholder="Message"  
                        rows="8" cols="20" name="message" required />
                </div>
                <div className="form__group">
                    <input className="btn btn__submit" type="submit" value="Submit" />
                </div>
                <Alert />
            </form>
        </div>
        <div className="split">
            <ContactSVG />
        </div>
        </>
    )
};

export default Contact;