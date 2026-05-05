import './index.css';

export const Ticket = ({ event }) => {
    return (
        <article className="ticket">
            <header className="ticket__header ticket__section">
                <h2 className="ticket__section-title">WHAT</h2>
                <h1 className="ticket__title page__title">{event.name}</h1>
            </header>

            <section className="ticket__location ticket__section">
                <h2 className="ticket__section-title">WHERE</h2>
                <h3 className="ticket__desc">{event.where}</h3>
            </section>

            <section className="ticket__datetime ticket__section">
                <h2 className="ticket__section-title">WHEN</h2>
                <h3 className="ticket__desc">{event.when.date}</h3>
            </section>

            <section className="ticket__datetime ticket__section">
                <h2 className="ticket__section-title">FROM</h2>
                <h3 className="ticket__desc">{event.when.from}</h3>
            </section>

            <section className="ticket__datetime ticket__datetime--last ticket__section">
                <h2 className="ticket__section-title">TO</h2>
                <h3 className="ticket__desc">{event.when.to}</h3>
            </section>

            <section className="ticket__info ticket__section">
                <h2 className="ticket__section-title">INFO</h2>
                <p className="ticket__desc ticket__desc--small">
                    Section {event.section} - seat {event.seat}
                </p>
            </section>

            <footer className="ticket__footer ticket__section">
                <h2 className="ticket__barcode">{event.id}</h2>
                <p className="ticket__id">#{event.id}</p>
            </footer>
        </article>
    );
};
