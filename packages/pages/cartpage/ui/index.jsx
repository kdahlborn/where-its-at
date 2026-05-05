import './index.css';
import { PageWrapper } from '@where-its-at/pagewrapper';
import { useTicketsStore } from '@where-its-at/useticketsstore';
import { CartList } from '@where-its-at/cartlist';
import { calculateTotalPrice } from '@where-its-at/calculatetotalprice';
import { Button } from '@where-its-at/button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { LoadingOverlay, Box } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { motion } from 'motion/react';
import { LoadingDots } from '@where-its-at/loadingdots';
import { Link } from 'react-router-dom';

export const CartPage = () => {
    const { cart, checkout } = useTicketsStore();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [visible, { toggle }] = useDisclosure(false);

    const handleClick = () => {
        toggle();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);

            setTimeout(() => {
                checkout();
                navigate('/tickets');
            }, 1000);
        }, 2000);
    };

    return (
        <Box pos="relative">
            <LoadingOverlay
                pos="fixed"
                visible={visible}
                zIndex={1000}
                classNames={{ root: 'overlay' }}
                overlayProps={{
                    blur: 4,
                    color: 'var(--80-black)',
                    children: (
                        <section className="overlay__content">
                            <p className="overlay__text">
                                {isLoading
                                    ? 'Bokar biljetter...'
                                    : 'Dina biljetter är bokade!'}
                            </p>
                        </section>
                    ),
                }}
                loaderProps={{
                    children: isLoading ? (
                        <LoadingDots color="pink" />
                    ) : (
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                type: 'spring',
                                stiffness: 500,
                                damping: 20,
                            }}
                            className="icon-container"
                        >
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="overlay__icon"
                            />
                        </motion.div>
                    ),
                }}
            />
            <PageWrapper>
                {cart.length > 0 ? (
                    <>
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
                        <Button text="Skicka order" onClick={handleClick} />
                    </>
                ) : (
                    <>
                        <h1 className="page__msg">Din varukorg är tom</h1>
                        <Link to="/events" className="btn page__link">
                            Gå till events
                        </Link>
                    </>
                )}
            </PageWrapper>
        </Box>
    );
};
