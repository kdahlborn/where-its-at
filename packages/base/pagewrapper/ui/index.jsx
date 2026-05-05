import './index.css';
import { motion } from 'motion/react';

export const PageWrapper = ({ children, className = '' }) => {
    return (
        <motion.section
            className={`page__wrapper ${className}`}
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.section>
    );
};
