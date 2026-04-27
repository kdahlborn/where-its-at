import './index.css';

export const Button = ({ text, className = 'btn', onClick, label = null }) => {
    return (
        <button className={className} onClick={onClick} aria-label={label}>
            {text}
        </button>
    );
};
