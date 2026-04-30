import './index.css';
import { PageWrapper } from '@where-its-at/pagewrapper';
import { useTicketsStore } from '@where-its-at/useticketsstore';
import { Ticket } from '@where-its-at/ticket';
import { TicketSwiper } from '@where-its-at/ticketswiper';
import { Button } from '@where-its-at/button';
import { Link } from 'react-router-dom';

export const TicketsPage = () => {
    const { bookedTickets } = useTicketsStore();

    return (
        <PageWrapper className="tickets-page">
            {bookedTickets.length > 0 ? (
                <TicketSwiper events={bookedTickets} />
            ) : (
                <>
                    <h1 className="page__msg">Du har inga biljetter</h1>
                    <Link to="/events" className="btn page__link">
                        Gå till events
                    </Link>
                </>
            )}
        </PageWrapper>
    );
};
