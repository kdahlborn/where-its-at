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
            className="page__content"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeIn' }}
        >
            <img src={logo} alt="logotype" className="logotype" />
            <h1 className="page__title">Where It's @</h1>
            <h2 className="page__subtitle">Ticketing made easy</h2>
        </motion.section>
    );
};
