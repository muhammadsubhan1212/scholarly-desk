import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote } from 'lucide-react';
import { reviews } from '../../data/home';
import { getInitials } from '../../utils/helpers';
import 'swiper/css';
import 'swiper/css/pagination';

export default function ReviewsCarousel({ items = reviews }) {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={14}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 4500, disableOnInteraction: false }}
      breakpoints={{
        768: { slidesPerView: 2 },
        1100: { slidesPerView: 3 },
      }}
      className="writers-swiper !pb-11"
    >
      {items.map((review) => (
        <SwiperSlide key={review.name}>
          <article className="surface-card flex h-full min-h-[13.5rem] flex-col p-5">
            <Quote strokeWidth={1.5} className="h-7 w-7 text-accent/30" />
            <p className="mt-3 flex-1 text-[14px] leading-relaxed text-slate-600">
              “{review.quote}”
            </p>
            <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-soft font-display text-[12px] font-bold text-primary">
                {getInitials(review.name)}
              </div>
              <div>
                <p className="text-[13px] font-semibold text-secondary">{review.name}</p>
                <p className="text-[11px] text-muted">{review.city}</p>
              </div>
            </div>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
