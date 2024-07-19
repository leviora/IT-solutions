import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

function ContactForm() {
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
    
        try {
            const response = await axios.post('http://localhost:3002/api/contact', { phone, message });
            console.log(response.data);
        } catch (error) {
            console.error('Błąd podczas wysyłania formularza:', error);
        }
    
        setSubmitting(false);
    };
    
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formPhone">
                <Form.Label>Numer telefonu</Form.Label>
                <Form.Control
                    type="phone"
                    placeholder="Wpisz numer telefonu"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlId="formMessage">
                <Form.Label>Wiadomość</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Wpisz treść wiadomości"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={submitting}>
                {submitting ? 'Wysyłanie...' : 'Wyślij'}
            </Button>
        </Form>
    );
}

export default ContactForm;
