import './index.css';
import { Loader } from '@mantine/core';

export const Loading = ({ className = '' }) => {
    return (
        <Loader
            className={`loader ${className}`}
            color="var(--purple)"
            type="dots"
            size={80}
        />
    );
};
