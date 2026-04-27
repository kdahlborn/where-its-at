import './index.css';
import { motion } from 'motion/react';

const variants = {
    initial: { x: '100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '-100%', opacity: 0 },
};

export const PageWrapper = ({ children, className = '' }) => {
    return (
        <motion.section
            className={`page__wrapper ${className}`}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
            style={{ position: 'absolute', width: '100%' }}
        >
            {children}
        </motion.section>
    );
};
