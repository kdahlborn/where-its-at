import './index.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const NavItem = ({ toPage, icon, text, count = 0 }) => {
    return (
        <NavLink
            to={`/${toPage}`}
            className={({ isActive }) =>
                isActive ? 'navbar__link active' : 'navbar__link'
            }
        >
            {count > 0 && <span className="count-badge">{count}</span>}
            <FontAwesomeIcon icon={icon} className="navbar__icon" />
            {text}
        </NavLink>
    );
};
