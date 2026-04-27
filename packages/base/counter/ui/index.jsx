import { Button } from '@where-its-at/button';
import './index.css';

export const Counter = ({ event, qty, setQty }) => {
    const decrease = () => {
        if (qty > 1) setQty((prev) => prev - 1);
    };

    const increase = () => {
        setQty((prev) => prev + 1);
    };
    return (
        <section className="counter">
            <article className="counter__top">
                <h2 className="counter__price">{event.price * qty}</h2>
            </article>
            <section className="counter__footer">
                <Button className="counter__btn" onClick={decrease} text="-" />
                <h3 className="counter__qty">{qty}</h3>
                <Button className="counter__btn" onClick={increase} text="+" />
            </section>
        </section>
    );
};
