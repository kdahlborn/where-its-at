import { Outlet, useLocation, useMatches } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import './index.css';
import { Navbar } from '@where-its-at/navbar';
import { Toaster } from 'react-hot-toast';

export const Layout = () => {
    const location = useLocation();
    const matches = useMatches();
    const hideNavbar = matches.some((match) => match.handle?.hideNavbar);

    return (
        <div
            className="app"
            style={{ position: 'relative', overflowX: 'hidden' }}
        >
            <Toaster position="top-center" />
            <main className="page">
                <AnimatePresence mode="wait">
                    <Outlet key={location.pathname} />
                </AnimatePresence>
            </main>
            {!hideNavbar && <Navbar />}
        </div>
    );
};
