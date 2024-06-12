
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SideNavigation.css';

function SideNavigation() {

    return (
        <div className='side-navigation'>
            <ul className='quick-nav'>
                <li>
                    <Link to='/'>
                        <span className='tooltip'>Strona główna</span>
                    </Link>
                </li>
                <li>
                    <Link to='/about'>
                        <span className='tooltip'>O nas</span>
                    </Link>
                </li>
                <li>
                    <Link to='/services'>
                        <span className='tooltip'>Usługi</span>
                    </Link>
                </li>
                <li>
                    <Link to='/portfolio'>
                        <span className='tooltip'>Portfolio</span>
                    </Link>
                </li>
                <li>
                    <Link to='/contact'>
                        <span className='tooltip'>Kontakt</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default SideNavigation;


