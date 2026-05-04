import { useEffect } from 'react';
import './index.css';
import toast from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlugCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@where-its-at/button';

export const DisplayError = ({ error, onRetry }) => {
    useEffect(() => {
        if (error) {
            toast.error('Nu sket det sig styggt!', {
                id: 'global-error',
                style: {
                    backgroundColor: 'var(--purple)',
                    padding: '1rem',
                    color: 'var(--white)',
                    fontWeight: '600',
                },
            });
        }
    }, [error]);

    return (
        <article className="error-msg centered-y">
            <section className="error-msg__circle">
                <FontAwesomeIcon
                    className="error-msg__icon"
                    icon={faPlugCircleXmark}
                />
                <h2 className="error-msg__title">ERROR</h2>
            </section>
            {onRetry && (
                <Button
                    className="error-msg__btn"
                    text={'Försök igen'}
                    onClick={onRetry}
                />
            )}
        </article>
    );
};
