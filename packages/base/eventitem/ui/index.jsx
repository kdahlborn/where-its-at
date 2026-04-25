import './index.css';

export const EventItem = ({ event }) => {
    return (
        <li className="event">
            <section className="date">
                <p className="date__day">
                    {event.when.date.slice(0, 2)}
                    <span className="date__month">
                        {event.when.date.slice(3)}
                    </span>
                </p>
            </section>
            <article className="event__info">
                <h2 className="event__title">{event.name}</h2>
                <p className="event__venue">{event.where}</p>
                <p className="event__time">
                    {event.when.from} - {event.when.to}
                </p>
                <p className="event__price">
                    {event.price === 0 ? 'Gratis' : `${event.price} SEK`}
                </p>
            </article>
        </li>
    );
};
