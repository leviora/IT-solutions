import React from 'react';
import { Button } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/MenuButton.css';

function MenuButton() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Button className="custom-button" onClick={handleClick}>
            <FaBars />
        </Button>
    );
}

export default MenuButton;
