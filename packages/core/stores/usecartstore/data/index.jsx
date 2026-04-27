import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
    persist(
        (set, get) => ({
            cart: [],

            addToCart: (event, qty = 1) => {
                const cart = get().cart;
                const eventInCart = cart.find((e) => e.id === event.id);

                if (eventInCart) {
                    set({
                        cart: cart.map((e) =>
                            e.id === event.id ? { ...e, qty: e.qty + 1 } : e,
                        ),
                    });
                } else {
                    set({ cart: [...cart, { ...event, qty: qty }] });
                }
            },

            removeFromCart: (id) => {
                const cart = get.cart();
                const eventInCart = cart.find((e) => e.id === event.id);

                if (eventInCart.qty === 1) {
                    set({ cart: cart.filter((e) => e.id !== id) });
                } else {
                    set({ cart: cart.map((e) => e.id === id) });
                }
            },
        }),
        {
            name: 'cart',
        },
    ),
);
