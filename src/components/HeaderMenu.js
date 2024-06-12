import React from 'react';
import { Button } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/HeaderMenu.css';

function HeaderMenu() {
    return (
        <section id='header-menu' className='header-menu'>
            <div className="menu-container">
                <div className='menu'>
                <h1>Menu</h1>
                    <Link to="/navigation" className="custom-button">
                        <FaBars />
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default HeaderMenu;
