import React, { useState } from 'react';

const Dropdown = ({ options, onSelectionChange }) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        const value = event.target.value;
        setSelectedOption(value);
        onSelectionChange(value); // Notify the parent component
    };


    return (
        <div>
            <select id="dynamic-options" value={selectedOption} onChange={handleChange}>
                <option value="">Select an option</option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;