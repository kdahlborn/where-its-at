import { Outlet, useMatches } from 'react-router-dom';
import './index.css';
import { Navbar } from '@where-its-at/navbar';
import { Toaster } from 'react-hot-toast';

export const Layout = () => {
    const matches = useMatches();
    const hideNavbar = matches.some((match) => match.handle?.hideNavbar);

    return (
        <div
            className="app"
            style={{ position: 'relative', overflowX: 'hidden' }}
        >
            <Toaster position="top-center" />
            <main className="page">
                <Outlet />
            </main>
            {!hideNavbar && <Navbar />}
        </div>
    );
};
