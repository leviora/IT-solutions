import React from 'react';
import CountUp from 'react-countup';

function Counters() {
    return (
        <div className="counters">
            <div className="counter">
                <h2 className="counter-value">
                    <CountUp start={0} end={250} duration={2.5} />+
                </h2>
                <p className="counter-text">Zrealizowanych projektów</p>
            </div>
            <div className="counter">
                <h2 className="counter-value">
                    <CountUp start={0} end={150} duration={2} />+
                </h2>
                <p className="counter-text">Zadowolonych klientów</p>
            </div>
            <div className="counter">
                <h2 className="counter-value">
                    <CountUp start={0} end={10} duration={1.5} /> lat
                </h2>
                <p className="counter-text">Doświadczenia</p>
            </div>
        </div>
    );
}

export default Counters;
