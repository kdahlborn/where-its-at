import './index.css';

export const Button = ({ text, className = '', onClick, label = null }) => {
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
