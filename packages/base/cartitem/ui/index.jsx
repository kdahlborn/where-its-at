import { useTicketStore } from '@where-its-at/useticketstore';
import './index.css';
import { Counter } from '@where-its-at/counter';

export const CartItem = ({ item }) => {
    const { addToCart, removeFromCart } = useTicketStore();

    return (
        <li className="cart-item">
            <Counter
                event={item}
                decrease={() => removeFromCart(item.id)}
                increase={() => addToCart(item)}
                value={item.qty}
                inCart={true}
            />
        </li>
    );
};
