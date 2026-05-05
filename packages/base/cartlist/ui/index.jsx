import { CartItem } from '@where-its-at/cartitem';
import './index.css';

export const CartList = ({ cart }) => {
    return (
        <ul className="cart-list">
            {cart.map((item) => {
                return <CartItem key={item.id} item={item} />;
            })}
        </ul>
    );
};
