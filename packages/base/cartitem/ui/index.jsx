import { useTicketsStore } from '@where-its-at/useticketsstore';
import './index.css';
import { Counter } from '@where-its-at/counter';

export const CartItem = ({ item }) => {
    const { addToCart, removeFromCart } = useTicketsStore();

    return (
        <li className="cart-item">
            <Counter
                event={item}
                decrease={() => removeFromCart(item.id)}
                increase={() => {
                    item.qty < 10 && addToCart(item);
                }}
                value={item.qty}
                inCart={true}
            />
        </li>
    );
};
