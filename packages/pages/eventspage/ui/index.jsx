import { SearchForm } from '@where-its-at/searchform';
import './index.css';
import { useEventsStore } from '@where-its-at/useeventsstore';
import { EventsList } from '@where-its-at/eventslist';
import { useEffect } from 'react';

export const EventsPage = () => {
    const { events, loading, error, fetchEvents } = useEventsStore();

    useEffect(() => {
        fetchEvents();
    }, [fetchEvents]);

    useEffect(() => {
        console.log(events);
    }, [events]);

    return (
        <section className="page__content">
            <h1 className="page__title">Events</h1>
            <SearchForm />
            <EventsList events={events} />
        </section>
    );
};
