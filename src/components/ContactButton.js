import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FaEnvelope } from 'react-icons/fa';
// import ContactForm from './ContactForm'; 
// import '../styles/ContactForm.css';
import '../styles/ContactButton.css';

function ContactButton() {
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
        console.log("wcisniecie formularza");
    };

    return (
        <div className="contact-button-container">
            <button className="contact-button" onClick={toggleForm}>
                <FaEnvelope />
            </button>
            {/* {showForm && <ContactForm />} */}
            {showForm && 
                <div className='companyData'>
                    <a href='mailto:oferta@itsolutions.pl'>oferta@itsolutions.pl</a><br/>
                    <a href='tel:+48661189928'>661 189 928</a> 
                </div>
            }
        </div>
    );
}

export default ContactButton;
