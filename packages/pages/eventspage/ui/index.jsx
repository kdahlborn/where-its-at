import { SearchForm } from '@where-its-at/searchform';
import './index.css';
import { useEventsStore } from '@where-its-at/useeventsstore';
import { EventsList } from '@where-its-at/eventslist';
import { useEffect } from 'react';
import { PageWrapper } from '@where-its-at/pagewrapper';
import { LoadingDots } from '@where-its-at/loadingdots';

export const EventsPage = () => {
    const { events, loading, error, fetchEvents } = useEventsStore();

    useEffect(() => {
        fetchEvents();
    }, [fetchEvents]);

    // useEffect(() => {
    //     console.log(events);
    // }, [events]);

    return (
        <PageWrapper>
            <h1 className="page__title">Events</h1>
            <SearchForm />
            {loading ? (
                <LoadingDots color="purple" className="centered-y" />
            ) : (
                <EventsList events={events} />
            )}
        </PageWrapper>
    );
};
