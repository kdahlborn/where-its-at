import React, { useState, useRef } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export const SearchForm = () => {
    const inputRef = useRef(null);
    const [input, setInput] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    return (
        <form className="form">
            <input
                ref={inputRef}
                type="text"
                className="form__input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            {!isFocused && input === '' && (
                <FontAwesomeIcon
                    className="form__icon"
                    icon={faMagnifyingGlass}
                />
            )}
        </form>
    );
};
