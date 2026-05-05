import { Button } from '@where-its-at/button';
import './index.css';
import { EventInfo } from '@where-its-at/eventinfo/ui';

export const Counter = ({
    event,
    decrease,
    increase,
    value,
    inCart = false,
}) => {
    return (
        <section className="counter">
            <article className="counter__top">
                {inCart ? (
                    <EventInfo event={event} hideVenue={true} />
                ) : (
                    <h2 className="counter__price pink-shadow">
                        {event.price * value}
                    </h2>
                )}
            </article>
            <section className="counter__footer">
                <Button className="counter__btn" onClick={decrease} text="-" />
                <h3 className="counter__qty">{value}</h3>
                <Button className="counter__btn" onClick={increase} text="+" />
            </section>
        </section>
    );
};
