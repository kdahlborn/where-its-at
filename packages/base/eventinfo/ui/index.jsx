import './index.css';

export const EventInfo = ({ event, hideVenue = false }) => {
    return (
        <article className="event-info">
            <h2 className="event-info__title page__title">{event.name}</h2>
            <h3 className="event-info__datetime">
                {event.when.date} kl {event.when.from} - {event.when.to}
            </h3>
            {!hideVenue && <p className="event-info__venue">@ {event.where}</p>}
        </article>
    );
};
