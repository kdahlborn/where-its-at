import './index.css';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Ticket } from '@where-its-at/ticket';

export const TicketSwiper = ({ events }) => {
    return (
        <Swiper
            className="centered-y"
            modules={[EffectCards]}
            effect="cards"
            grabCursor={true}
            cardsEffect={{
                perSlideOffset: 4,
                perSlideRotate: 2,
                slideShadows: true,
            }}
        >
            {events.map((event) => {
                return (
                    <SwiperSlide key={event.id}>
                        <Ticket event={event} />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};
