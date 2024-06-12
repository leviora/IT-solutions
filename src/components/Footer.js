import React from 'react';
import '../styles/Footer.css';
import ContactButton from './ContactButton';
import ScrollTop from './ScrollToTopButton';

function Footer () {
    return (
        <footer>
            <div className="container-footer">  
                <div className='reserved'>
                    <h5>&copy; 2024 IT Solutions. All rights reserved.</h5>
                </div>
                {/* <div className='footer-right'>
                    <ContactButton />
                    <ScrollTop />
                </div> */}
            </div>
        </footer>
        
    );
}
export default Footer;