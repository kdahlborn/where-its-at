import './index.css';
import { Loader } from '@mantine/core';

export const LoadingDots = ({ className = '', color }) => {
    return (
        <Loader
            className={`loading-dots ${className}`}
            color={`var(--${color})`}
            type="dots"
            size={80}
        />
    );
};
