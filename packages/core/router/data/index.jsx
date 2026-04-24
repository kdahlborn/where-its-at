import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@where-its-at/layout';
import { LandingPage } from '@where-its-at/landingpage';
import { EventsPage } from '@where-its-at/eventspage';
import { SingleEventPage } from '@where-its-at/singleeventpage';
import { CartPage } from '@where-its-at/cartpage';
import { TicketsPage } from '@where-its-at/ticketspage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <LandingPage />,
            },
            {
                path: 'events',
                element: <EventsPage />,
            },
            {
                path: 'event/:id',
                element: <SingleEventPage />,
            },
            {
                path: 'cart',
                element: <CartPage />,
            },
            {
                path: 'tickets',
                element: <TicketsPage />,
            },
        ],
    },
]);
