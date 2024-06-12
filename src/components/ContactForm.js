import React from 'react';
import { Form, Button } from 'react-bootstrap';
import '../styles/ContactForm.css';

function ContactForm() {
    return (
        <section id="contact">
            <div className="contact-details">
                <h2>Skontaktuj się z nami</h2>
                <p><i className="fas fa-phone-alt"></i> +48 661 189 928</p>
                <p><i className="fas fa-envelope"></i> oferta@itsolutions.pl</p>
                <p><i className="fas fa-map-marker-alt"></i> ul. Przykładowa 1, 00-001 Warszawa</p>
            </div>
            <div className="contact-form">
                <h3>Formularz kontaktowy</h3>
                <Form>
                    <Form.Group controlId="formPhone">
                        <Form.Label>Numer telefonu</Form.Label>
                        <Form.Control type="phone" placeholder="Wpisz numer telefonu" />
                    </Form.Group>
                    <Form.Group controlId="formMessage">
                        <Form.Label>Wiadomość</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Wpisz treść wiadomości" />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="custom-button">
                        Wyślij
                    </Button>
                </Form>
            </div>
        </section>
    );
}

export default ContactForm;
