import './index.css';
import logo from '../../../../src/assets/images/logo.png';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const LandingPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/events');
        }, 3000);
    }, []);

    return (
        <motion.section
            className="brand"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeIn' }}
        >
            <img src={logo} alt="logotype" className="logotype" />
            <h1 className="page__title">Where It's @</h1>
            <motion.h2
                className="page__subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1.5, ease: 'easeIn' }}
            >
                Ticketing made easy
            </motion.h2>
        </motion.section>
    );
};
