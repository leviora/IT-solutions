import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import '../styles/BudgetInput.css';

function BudgetInput() {
    const [budget, setBudget] = useState(10000);

    const handleSliderChange = (e) => {
        setBudget(e.target.value);
    };

    return (
        <section id='budget'>
            <div className="budget-container">
                <Form.Group controlId="formBudget" className="budget-input-group">
                    <Form.Label><h2>Budżet realizacji</h2></Form.Label>
                    <div className="budget-slider-container">
                        <input
                            type="range"
                            min="0"
                            max="100000"
                            step="1000"
                            value={budget}
                            onChange={handleSliderChange}
                            className="budget-slider"
                        />
                        <div className="budget-value">PLN {budget}</div>
                    </div>
                    <div className="budget-info">PLN 10.000 szacowany*</div>
                </Form.Group>
            </div>
        </section>
    );
}

export default BudgetInput;
