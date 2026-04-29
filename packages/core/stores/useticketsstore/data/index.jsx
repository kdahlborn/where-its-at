import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { createTickets } from '@where-its-at/createtickets';

export const useTicketsStore = create(
    persist(
        (set, get) => ({
            cart: [],
            bookedTickets: [],

            addToCart: (event, qty = 1) => {
                const cart = get().cart;
                const eventInCart = cart.find((e) => e.id === event.id);

                if (eventInCart) {
                    set({
                        cart: cart.map((e) =>
                            e.id === event.id ? { ...e, qty: e.qty + qty } : e,
                        ),
                    });
                } else {
                    set({ cart: [...cart, { ...event, qty: qty }] });
                }
            },

            removeFromCart: (id) => {
                const cart = get().cart;
                const eventInCart = cart.find((e) => e.id === id);

                if (eventInCart.qty === 1) {
                    set({ cart: cart.filter((e) => e.id !== id) });
                } else {
                    set({
                        cart: cart.map((e) =>
                            e.id === id ? { ...e, qty: e.qty - 1 } : e,
                        ),
                    });
                }
            },

            checkout: () => {
                set({
                    bookedTickets: createTickets(get().cart),
                    cart: [],
                });
            },
        }),
        {
            name: 'tickets',
        },
    ),
);
