import React from "react";
import { useState } from "react";

import './Dropdown.css';

const Dropdown = ({options = [], onSelect, selectedIndex}) => {
    const [optionsVisible, setOptionsVisible] = useState(false);
    const toggleOptions = () => {
        setOptionsVisible(!optionsVisible);
    };

    const optionsClasses = optionsVisible ? 'dropdown__options' : 'dropdown__options dropdown__options-hidden';

    return (
        <div className="dropdown-wrapper">
        <div className="dropdown-select">
                <div className="dropdown__selected-text-wrapper">
                    <p className={`dropdown__text ${selectedIndex !== null && 'dropdown__text--selected'}`}>
                        {selectedIndex !== null ? options[selectedIndex].name :  'Selected'} 
                    </p>
                </div>
                <button className="dropdown-button" onClick={toggleOptions}>
                    <img className={`dropdown__icon ${optionsVisible && 'dropdown__opened'}`} src="/src/assets/svg/Arrow.svg" alt="down arrow" />
                </button>
            </div>
            <div className={optionsClasses} >
                {options.map(({name, id}, index) => <div 
                        className={`dropdown__option ${selectedIndex === index && 'dropdown__option-selected'}`}
                        key={id} 
                        id={id} 
                        selected={selectedIndex === index} 
                        value={index}
                        onClick={() => {onSelect(index); setOptionsVisible(false);}}
                    >
                    {name}
                </div>
                )}
            </div>           
        </div>
    )
};

export default Dropdown;