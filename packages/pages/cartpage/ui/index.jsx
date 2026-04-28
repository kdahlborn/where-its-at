import './index.css';
import { PageWrapper } from '@where-its-at/pagewrapper';
import { useTicketStore } from '@where-its-at/useticketstore';
import { CartList } from '@where-its-at/cartlist';
import { calculateTotalPrice } from '@where-its-at/calculatetotalprice';
import { Button } from '@where-its-at/button';
import { useNavigate } from 'react-router-dom';

export const CartPage = () => {
    const { cart, checkout } = useTicketStore();
    const navigate = useNavigate();

    return (
        <PageWrapper>
            <h1 className="page__title">Order</h1>
            <CartList cart={cart} />
            <article className="summary">
                <h3 className="summary__title page__subtitle">
                    Totalt värde på ordern
                </h3>
                <h4 className="summary__price pink-shadow">
                    {calculateTotalPrice(cart)} sek
                </h4>
            </article>
            <Button
                text="Skicka order"
                onClick={() => {
                    checkout();
                    navigate('/tickets');
                }}
            />
        </PageWrapper>
    );
};
