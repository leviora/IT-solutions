import React, { useState } from 'react';
import NavigationLinks from '../components/NavigationLinks';

function NavigationPage() {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div>
            {isOpen && <NavigationLinks onClose={handleClose} />}
        </div>
    );
};

export default NavigationPage;
