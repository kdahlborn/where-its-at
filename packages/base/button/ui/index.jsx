import './index.css';

export const Button = ({ text, className = '', onClick, label }) => {
    return (
        <button
            className={`btn ${className}`}
            onClick={onClick}
            aria-label={label}
        >
            {text}
        </button>
    );
};
