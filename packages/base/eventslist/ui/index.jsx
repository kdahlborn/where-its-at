import { EventItem } from '@where-its-at/eventitem';
import './index.css';

export const EventsList = ({ events }) => {
    return (
        <ul className="events-list">
            {/* <EventItem event={events[0]} /> */}
            {events.map((event) => {
                return <EventItem key={event.id} event={event} />;
            })}
        </ul>
    );
};
