import './date.css';
import { useState, useEffect } from 'react';
import DateDisplay from './DateDisplay';
const DateContainer = () => {
    // TODO useState
    const [date, setDate] = useState(Date.now());
    // TODO useEffect
    useEffect(() => {
        console.log('change');
    }, [date]);
    // TODO props
    return (
        <div>
            <input
                type="date"
                className="date-input"
                onChange={(e) => setDate(e.target.value)}
            />
            <DateDisplay date={date} />
        </div>
    );
};

export default DateContainer;
