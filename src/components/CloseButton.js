import React from 'react';
import { FaTimes } from 'react-icons/fa';
import '../styles/CloseButton.css';

const CloseButton = ({ onClick }) => {
  return (
    <button type="button" className="btn-close" aria-label="Close" onClick={onClick}>
      <FaTimes />
    </button>
  );
};

export default CloseButton;
