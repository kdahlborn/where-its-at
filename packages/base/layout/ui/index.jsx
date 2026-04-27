import { Outlet, useLocation, useMatches } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import './index.css';
import { Navbar } from '@where-its-at/navbar';

export const Layout = () => {
    const location = useLocation();
    const matches = useMatches();

    const hideNavbar = matches.some((match) => match.handle?.hideNavbar);

    return (
        <div
            className="app"
            style={{ position: 'relative', overflowX: 'hidden' }}
        >
            <AnimatePresence mode="wait">
                <motion.main className="page" key={location.pathname}>
                    <Outlet />
                </motion.main>
            </AnimatePresence>
            {!hideNavbar && <Navbar />}
        </div>
    );
};
