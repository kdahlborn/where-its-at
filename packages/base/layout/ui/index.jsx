import { Outlet } from 'react-router-dom';
import './index.css';

export const Layout = () => {
    return (
        <div className="app">
            <main className="page">
                <Outlet />
            </main>
        </div>
    );
};
