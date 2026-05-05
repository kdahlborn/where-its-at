import axios from 'axios';
import { create } from 'zustand';

export const useEventsStore = create((set) => ({
    events: [],
    loading: false,
    error: false,

    fetchEvents: () => {
        set({ loading: true });
        axios
            .get('https://santosnr6.github.io/Data/events.json')
            .then((res) => {
                set({
                    events: res.data.events,
                    error: false,
                });
            })
            .catch(() => {
                set({
                    error: true,
                });
            })
            .finally(() => {
                set({
                    loading: false,
                });
            });
    },
}));
