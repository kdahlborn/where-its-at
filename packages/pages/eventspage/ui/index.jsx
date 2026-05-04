import { SearchForm } from '@where-its-at/searchform';
import './index.css';
import { useEventsStore } from '@where-its-at/useeventsstore';
import { EventsList } from '@where-its-at/eventslist';
import { useEffect, useState } from 'react';
import { PageWrapper } from '@where-its-at/pagewrapper';
import { LoadingDots } from '@where-its-at/loadingdots';
import { DisplayError } from '@where-its-at/displayerror';

export const EventsPage = () => {
    const { events, loading, error, fetchEvents } = useEventsStore();
    const [input, setInput] = useState('');
    const filteredEvents = events.filter((event) =>
        event.name.toLowerCase().includes(input.toLowerCase().trim()),
    );

    useEffect(() => {
        fetchEvents();
    }, [fetchEvents]);

    return (
        <PageWrapper>
            <h1 className="page__title">Events</h1>
            <SearchForm input={input} setInput={setInput} />
            {loading ? (
                <LoadingDots color="purple" className="centered-y" />
            ) : error ? (
                <DisplayError error={error} onRetry={fetchEvents} />
            ) : (
                <EventsList events={input === '' ? events : filteredEvents} />
            )}
        </PageWrapper>
    );
};
