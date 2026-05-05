import './index.css';
import { faList } from '@fortawesome/free-solid-svg-icons/faList';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping';
import { faTicket } from '@fortawesome/free-solid-svg-icons/faTicket';
import { useTicketsStore } from '@where-its-at/useticketsstore';
import { NavItem } from '@where-its-at/navitem';

export const Navbar = () => {
    const { cart, bookedTickets } = useTicketsStore();

    return (
        <nav className="navbar">
            <NavItem toPage="events" icon={faList} text="Events" />
            <NavItem
                toPage="cart"
                icon={faCartShopping}
                text="Varukorg"
                count={cart.length}
            />
            <NavItem
                toPage="tickets"
                icon={faTicket}
                text="Biljetter"
                count={bookedTickets.length}
            />
        </nav>
    );
};
