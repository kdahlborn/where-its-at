import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons/faList';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping';
import { faTicket } from '@fortawesome/free-solid-svg-icons/faTicket';
import { NavLink } from 'react-router-dom';
import { useCartStore } from '@where-its-at/usecartstore';

export const Navbar = () => {
    const { cart } = useCartStore();

    return (
        <nav className="navbar">
            <NavLink
                to="/events"
                className={({ isActive }) =>
                    isActive ? 'navbar__link active' : 'navbar__link'
                }
            >
                <FontAwesomeIcon icon={faList} className="navbar__icon" />
                Events
            </NavLink>
            <NavLink
                to="/cart"
                className={({ isActive }) =>
                    isActive ? 'navbar__link active' : 'navbar__link'
                }
            >
                {cart.length > 0 && <span className="qty">{cart.length}</span>}
                <FontAwesomeIcon
                    icon={faCartShopping}
                    className="navbar__icon"
                />
                Varukorg
            </NavLink>
            <NavLink
                to="/tickets"
                className={({ isActive }) =>
                    isActive ? 'navbar__link active' : 'navbar__link'
                }
            >
                <FontAwesomeIcon icon={faTicket} className="navbar__icon" />
                Biljetter
            </NavLink>
        </nav>
    );
};
