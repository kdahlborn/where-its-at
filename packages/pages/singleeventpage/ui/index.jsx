import { useNavigate, useParams } from 'react-router-dom';
import './index.css';
import { PageWrapper } from '@where-its-at/pagewrapper';
import { useEventsStore } from '@where-its-at/useeventsstore';
import { useEffect, useState } from 'react';
import { EventInfo } from '@where-its-at/eventinfo';
import { Counter } from '../../../base/counter/ui';
import { Button } from '@where-its-at/button';
import { useTicketsStore } from '@where-its-at/useticketsstore';
import toast, { Toaster } from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useDisclosure } from '@mantine/hooks';
import { CartAddedModal } from '@where-its-at/cartaddedmodal';
import { Modal } from '@mantine/core';

export const SingleEventPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { events, loading, error, fetchEvents } = useEventsStore();
    const { addToCart } = useTicketsStore();
    const [qty, setQty] = useState(1);
    const [opened, { open, close }] = useDisclosure(false);

    const notify = () =>
        toast.success(
            `${qty} ${qty > 1 ? 'biljetter' : 'biljett'} till ${event.name} har lagts till i din varukorg`,
            {
                style: {
                    backgroundColor: 'var(--purple)',
                    color: 'var(--white)',
                },
            },
        );

    useEffect(() => {
        if (events.length === 0) {
            fetchEvents();
        }
    }, [events, fetchEvents]);

    const event = events.find((e) => e.id === id);

    // const handleClick = () => {};

    if (loading) {
        return <div className="">Loading...</div>;
    }

    if (error) {
        return <div className="">error...</div>;
    }

    if (event) {
        return (
            <PageWrapper className="single-page">
                <header className="page__header">
                    <Button
                        onClick={() => navigate(-1)}
                        className="back-btn"
                        text={<FontAwesomeIcon icon={faArrowLeft} />}
                        label="Go back"
                    />
                    <h1 className="page__title">Event</h1>
                    <h2 className="page__subtitle page__subtitle--small">
                        You are about to score some tickets to
                    </h2>
                </header>
                <EventInfo event={event} />
                <Counter
                    event={event}
                    decrease={() => {
                        qty > 1 && setQty((prev) => prev - 1);
                    }}
                    increase={() => setQty((prev) => prev + 1)}
                    value={qty}
                />
                <Button
                    onClick={() => {
                        addToCart(event, qty);
                        // notify();
                        open();
                    }}
                    text={'Lägg till i varukorgen'}
                />
                <Toaster toastOptions={{ duration: 3000 }} />
                <CartAddedModal
                    opened={opened}
                    close={close}
                    event={event}
                    qty={qty}
                />
            </PageWrapper>
        );
    }
};
