import './index.css';
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import { EventInfo } from '@where-its-at/eventinfo';
import { Button } from '@where-its-at/button';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const CartAddedModal = ({ opened, close, event, qty }) => {
    const navigate = useNavigate();

    return (
        <Modal
            opened={opened}
            onClose={close}
            withCloseButton={false}
            size="75%"
            centered
            classNames={{
                content: 'modal',
            }}
            overlayProps={{
                color: 'var(--80-black)',
                blur: 4,
            }}
            transitionProps={{
                transition: 'pop',
                duration: 200,
            }}
            styles={{
                content: {
                    backgroundColor: 'var(--dark-purple)',
                    boxShadow: '0 0 10px 2px var(--pink)',
                    marginBottom: '3rem',
                },
                body: {
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                },
            }}
        >
            <h3 className="modal__title">
                {qty} {qty > 1 ? 'biljetter' : 'biljett'} till
            </h3>
            <EventInfo event={event} />
            <h3 className="modal__title">har lagts till i din varukorg</h3>
            <footer className="modal__footer">
                <Button
                    text="Fortsätt handla"
                    onClick={() => navigate('/events')}
                    className="btn--bordered"
                />
                <Button
                    text="Gå till varukorgen"
                    onClick={() => navigate('/cart')}
                />
            </footer>
        </Modal>
    );
};
