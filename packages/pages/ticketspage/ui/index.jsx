import './index.css';
import { PageWrapper } from '@where-its-at/pagewrapper';
import { useTicketsStore } from '@where-its-at/useticketsstore';
import { Ticket } from '@where-its-at/ticket';

export const TicketsPage = () => {
    const { bookedTickets } = useTicketsStore();
    return (
        <PageWrapper className="tickets-page">
            <Ticket event={bookedTickets[0]} />
        </PageWrapper>
    );
};
