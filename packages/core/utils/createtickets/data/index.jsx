import { v4 as uuidv4 } from 'uuid';

export const createTickets = (cart) => {
    const sections = ['A', 'B', 'C', 'D', 'E'];
    let tickets = [];

    for (let item of cart) {
        const section = sections[Math.floor(Math.random() * sections.length)];
        const seat = Math.floor(Math.random() * 30) + 1;
        let { qty, ...ticket } = item;

        for (let i = 0; i < item.qty; i++) {
            ticket = {
                ...ticket,
                section: section,
                seat: seat + i,
                id: uuidv4().slice(0, 5).toUpperCase(),
            };
            tickets.push(ticket);
        }
    }

    return tickets;
};
